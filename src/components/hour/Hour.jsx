import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import { onDeleteTask } from '../../gateway/events';

const Hour = ({
  openDeleteEvent,
  setDeleteEvent,
  dataDay,
  dataHour,
  hourEvents,
  setEvents,
}) => {
  const res = hourEvents.map(({ id, dateTo, dateFrom, title, description }) => {
    const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
      new Date(dateFrom).getMinutes()
    )}`;
    const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
      new Date(dateTo).getMinutes()
    )}`;

    return (
      <Event
        setDeleteEvent={setDeleteEvent}
        openDeleteEvent={openDeleteEvent}
        setEvents={setEvents}
        onClick={() => onDeleteTask(id)}
        key={id}
        // calculating event height = duration of event in minutes
        height={
          (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
          (1000 * 60)
        }
        description={description}
        marginTop={new Date().getMinutes()}
        time={`${eventStart} - ${eventEnd}`}
        title={title}
        id={id}
      />
    );
  });
  const currentTimeMinutes = new Date().getMinutes();
  console.log();
  const now =
    dataDay === new Date().getDate() && dataHour === new Date().getHours() + 1;
  return (
    <div
      className={`calendar__time-slot ${
        hourEvents.length > 0 ? 'calendar__events-time-slot' : ''
      }`}
      data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {res}
      <span
        style={{ marginTop: currentTimeMinutes - 59 }}
        className={`${
          now && new Date().getMinutes() ? 'red-line' : ''
        }`}></span>
    </div>
  );
};

export default Hour;
Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  setEvents: PropTypes.func,
};
