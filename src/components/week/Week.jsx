import React from 'react';
import Day from '../day/Day';
import './week.scss';
import { fetchEvents } from '../../gateway/events';

const Week = ({ weekDates, events, handleDelete, setEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom).getTime() > new Date(dayStart.getTime()) &&
            new Date(event.dateTo).getTime() < dayEnd
        );
        return (
          <Day
            handleDelete={handleDelete}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            setEvents={setEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
