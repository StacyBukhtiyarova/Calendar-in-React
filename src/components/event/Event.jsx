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
  const [openDeleteEvent, setDeleteEvent] = useState(false);
  const onDeleteEvent = () => {
    onDeleteTask(id).then(() => fetchEvents().then((data) => setEvents(data)));
    setDeleteEvent(false);
  };
  const hourInMiliseconds = 60 * 60 * 1000; // 1000 miliseconds in one second; 60 seconds in one minute; 60 minutes in one hour
  const durationEventMiliseconds =
    new Date(dateTo).getTime() - new Date(dateFrom).getTime();
  const durationEventHour = durationEventMiliseconds / hourInMiliseconds;

  return (
    <>
      <button
        className="delete-event__open-modal-btn"
        onClick={() => setDeleteEvent(true)}>
        +
      </button>
      <div
        className="events__time-slot"
        style={{
          height: durationEventHour * 60,
          backgroundColor: '#FFA60036',
        }}>
        <span className="displayed-event__title">{title}</span>
        <span className="displayed-event__time">{time}</span>
      </div>
      {openDeleteEvent && (
        <div>
          <div className="modal overlay">
            <div className="modal__content">
              <div className="event-modal">
                <button
                  onClick={() => setDeleteEvent(false)}
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
        </div>
      )}{' '}
    </>
  );
};
export default Event;
Event.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  setEvents: PropTypes.func,
};
