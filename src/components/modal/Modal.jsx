import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { onCreateTask, fetchEvents } from '../../gateway/events';

const Modal = ({ events, setEvents, setModalWindow }) => {
  const createEvent = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    const newEvent = {
      title: formData.get('title'),
      description: formData.get('description'),
      dateFrom: new Date(
        formData.get('date') + 'T' + formData.get('startTime')
      ),
      dateTo: new Date(formData.get('date') + 'T' + formData.get('endTime')),
    };
    setModalWindow(false);
    onCreateTask(newEvent).then(() =>
      fetchEvents().then((data) => setEvents(data))
    );
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => setModalWindow(false)}>
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
  events: PropTypes.array,
  setEvents: PropTypes.func,
  setModalWindow: PropTypes.func,
};
