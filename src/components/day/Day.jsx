import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

const Day = ({
  dataDay,
  dayEvents,
  setEvents,
  openDeleteEvent,
  setDeleteEvent,
  weekDates,
  events,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div
      className="calendar__day"
      data-day={dataDay}>
      {hours.map((hour) => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter((event) => {
          return new Date(event.dateFrom).getHours() === hour;
        });

        return (
          <>
            <div>
              <Hour
                setDeleteEvent={setDeleteEvent}
                openDeleteEvent={openDeleteEvent}
                dataDay={dataDay}
                dataHour={hour}
                key={dataDay + hour}
                hourEvents={hourEvents}
                setEvents={setEvents}
                weekDates={weekDates}
                events={events}
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
