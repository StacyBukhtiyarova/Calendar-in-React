import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import './week.scss';

const Week = ({ weekDates, events, setEvents }) => {
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
Week.propTypes = {
  weekDates: PropTypes.array,
  events: PropTypes.array,
  setEvents: PropTypes.func,
};
