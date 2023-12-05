import React, { useState, useEffect, Component } from 'react';
import events, { fetchEvents } from '../../gateway/events';
import './modal.scss';
import { onCreateTask } from '../../gateway/events';

const Modal = ({ openModalWindow, hideModalWindow, children }) => {
  if (openModalWindow) {
    return null;
  }
  const [events, setEvents] = useState({
    title: '',
    dateFrom: '',
    dateTo: '',
    description: '',
    id: '',
  });
  const { title, dateFrom, dateTo, description, id } = events;
  const handleChange = (events) => {
    //  const [name, value] = event.target;
    //setEvents((data) => ({ ...data, [name]: value }));
    fetchEvents();
    setEvents(events.target.value);
  };
  const createEvent = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    const newEvent = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: formData.get('title'),
      description: formData.get('description'),
      dateFrom: new Date(
        formData.get('date') + 'T' + formData.get('startTime')
      ),
      dateTo: new Date(formData.get('date') + 'T' + formData.get('endTime')),
    };
    hideModalWindow();
    onCreateTask(newEvent);
    setEvents(newEvent);
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideModalWindow}>
            +
          </button>
          <form className="event-form">
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                value={dateFrom}
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={dateTo}
                onChange={handleChange}
              />
            </div>
            <textarea
              value={description}
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={createEvent}>
              Create
            </button>
          </form>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
