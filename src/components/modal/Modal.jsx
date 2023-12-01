import React, { useState, useEffect, Component } from 'react';
import events from '../../gateway/events';
import './modal.scss';
import { onCreateTask } from '../../gateway/events';

const Modal = ({ openModalWindow, hideModalWindow, children, createEvent }) => {
  if (openModalWindow) {
    return null;
  }

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
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input type="time" name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
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
