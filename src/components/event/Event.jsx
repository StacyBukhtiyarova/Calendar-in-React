import React, { useEffect, useState } from 'react';
import './event.scss';
import { fetchEvents, onDeleteTask } from '../../gateway/events';
const Event = (events, handleDelete) => {
  const [openDeleteEvent, setDeleteEvent] = useState(false);

  const onDeleteEvent = () => {
    onDeleteTask(events.id);
    setDeleteEvent(false);
  };

  return (
    <>
      <div onClick={() => setDeleteEvent(true)}>{events.title}</div>
      <div>
        {openDeleteEvent && (
          <div className="modal overlay">
            <div className="modal__content">
              {openDeleteEvent && (
                <div className="event-modal">
                  <button
                    onClick={() => setDeleteEvent(false)}
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
