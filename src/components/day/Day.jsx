import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

const Day = ({
  weekDates,
  events,
  setEvents,
  dataDay,
  dayEvents,
  deleteEventModal,
  setDeleteEventModal,
}) => {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);
  return (
    <div
      className="calendar__day"
      data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter((event) => {
          return new Date(event.dateFrom).getHours() === hour;
        });

        return (
          <Hour
            setDeleteEventModal={setDeleteEventModal}
            deleteEventModal={deleteEventModal}
            dataDay={dataDay}
            dataHour={hour}
            key={dataDay + hour}
            hourEvents={hourEvents}
            setEvents={setEvents}
            weekDates={weekDates}
            events={events}
          />
        );
      })}
    </div>
  );
};

export default Day;
Day.propTypes = {
  weekDates: PropTypes.array,
  events: PropTypes.array,
  setEvents: PropTypes.func,
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array,
  deleteEventModal: PropTypes.bool,
  setDeleteEventModal: PropTypes.func,
};
