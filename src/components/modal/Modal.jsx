import React, { useState, useEffect, Component } from 'react';
import events from '../../gateway/events';
import './modal.scss';
import { onCreateTask } from '../../gateway/events';

const Modal = ({ openModalWindow, hideModalWindow, children,createEvent }) => {
  if (openModalWindow) {
    return null;
  }
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevEventData) => ({
      ...prevEventData,
      [name]: value,
    }));
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
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={eventData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={eventData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={eventData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={eventData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={eventData.description}
              onChange={handleChange}></textarea>
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
