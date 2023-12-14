import React, { useEffect, useState } from 'react';
import './event.scss';
import { fetchEvents, onDeleteTask } from '../../gateway/events';
const Event = ({
  id,
  time,
  title,
  description,
  setEvents,
}) => {
  const [openDeleteEvent, setDeleteEvent] = useState(false);

  const onDeleteEvent = () => {
    onDeleteTask(id).then(() => fetchEvents().then((data) => setEvents(data)));
    setDeleteEvent(false);
  };

  return (
    <>
      <div onClick={() => setDeleteEvent(true)}>{title}</div>
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
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Event;
