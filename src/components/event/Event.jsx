import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './event.scss';
import { fetchEvents, onDeleteTask } from '../../gateway/events';

const Event = ({
  id,
  time,
  title,
  description,
  setEvents,
  dateFrom,
  dateTo,
}) => {
  const [deleteEventModal, setDeleteEventModal] = useState(false);
  const onDeleteEvent = () => {
    onDeleteTask(id).then(() => fetchEvents().then((data) => setEvents(data)));
  };
  const durationEventMiliseconds =
    new Date(dateTo).getTime() - new Date(dateFrom).getTime();
  const durationEventHour = durationEventMiliseconds / (60 * 60 * 1000);
  return (
    <div onClick={() => setDeleteEventModal(!deleteEventModal)}>
      <div
        className="events__time-slot"
        style={{
          justifyContent: 'start',
          height: durationEventHour * 60,
          backgroundColor: '#AE4461',
          lineHeight: 1.5,
          zIndex: 1,
          color: 'wheat',
        }}>
        <button
          className="delete-event__open-modal-btn"
          onClick={() => setDeleteEventModal(true)}>
          +
        </button>
        <span className="displayed-event__title">{title}</span>
        <span className="displayed-event__time">{time}</span>
      </div>
      {deleteEventModal && (
        <div className="modal overlay">
          <div className="modal__content">
            <div className="event-modal">
              <button
                onClick={() => setDeleteEventModal(false)}
                className="delete-event__close-btn">
                +
              </button>
              <span>{title}</span>
              <span>{time}</span>
              <span>{description}</span>
              <button
                type="submit"
                className="event-modal__delete-btn"
                onClick={onDeleteEvent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Event;
Event.propTypes = {
  //id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  setEvents: PropTypes.func,
  events: PropTypes.array,
  // dateFrom: PropTypes.data,
  //dateTo: PropTypes.data,
};
