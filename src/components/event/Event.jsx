import React, { useState } from 'react';
import './event.scss';
import { fetchEvents, onDeleteTask } from '../../gateway/events';
const Event = (events) => {
  const [deleteEvent, setDeleteEvent] = useState(false);
  const onDeleteEvent = () => {
    onDeleteTask(events.id).then(fetchEvents());
    setDeleteEvent(false);
  };
  return (
    <>
      <div onClick={() => setDeleteEvent(true)}>{events.title}</div>
      <div>
        {deleteEvent && (
          <div className="modal overlay">
            <div className="modal__content">
              {deleteEvent && (
                <div className="event-modal">
                  <button
                    onClick={() => setDeleteEvent(!deleteEvent)}
                    className="delete-event__close-btn">
                    +
                  </button>
                  <span>{events.title}</span>
                  <span>{events.time}</span>
                  <span>{events.description}</span>
                  <button
                    type="submit"
                    className="event-modal__delete-btn"
                    onClick={onDeleteEvent}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
