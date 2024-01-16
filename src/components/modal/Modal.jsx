import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { onCreateTask } from '../../gateway/events';

const Modal = ({ openModalWindow, hideModalWindow, events, setEvents }) => {
  if (openModalWindow) {
    return null;
  }
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
    onCreateTask(newEvent).then(() => setEvents(events.concat(newEvent)));
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={hideModalWindow}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={createEvent}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"></textarea>
            <button
              type="submit"
              className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  openModalWindow: PropTypes.bool,
  hideModalWindow: PropTypes.func,
  setEvents: PropTypes.func,
  events: PropTypes.array,
};
