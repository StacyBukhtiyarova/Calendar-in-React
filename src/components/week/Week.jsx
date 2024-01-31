import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';
import './week.scss';

const Week = ({
  id,
  weekDates,
  events,
  setEvents,
  deleteEventModal,
  setDeleteEventModal,
}) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom).getTime() > new Date(dayStart.getTime()) &&
            new Date(event.dateTo).getTime() < dayEnd
        );

        return (
          <Day
            deleteEventModal={deleteEventModal}
            setDeleteEventModal={setDeleteEventModal}
            id={id}
            weekDates={weekDates}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            setEvents={setEvents}
            dataHour={dayStart.getHours()}
            events={events}
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
