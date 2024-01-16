import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

const Day = ({ dataDay, dayEvents, setEvents, weekDates, time }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div
      className="calendar__day"
      data-day={dataDay}>
      {hours.map((hour) => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );
        return (
          <>
            <div>
              <Hour
                dataDay={dataDay}
                dataHour={hour}
                weekDates={weekDates}
                key={dataDay + hour}
                hourEvents={hourEvents}
                setEvents={setEvents}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Day;
Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array,
  setEvents: PropTypes.func,
};
//  currentDay && hour === new Date().getHours() && (
//    <span
//      className={`${
//        currentDay && hour === new Date().getHours()
//          ? 'calendar__current-time-slot'
//          : ''
//      }`}>
//      -
//    </span>
//  );
