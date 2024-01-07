import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import { onDeleteTask } from '../../gateway/events';

const Hour = ({ dataHour, hourEvents, setEvents }) => {
  const res = hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
    const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
      new Date(dateFrom).getMinutes()
    )}`;
    const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
      new Date(dateTo).getMinutes()
    )}`;
    return (
      <Event
        setEvents={setEvents}
        onClick={() => onDeleteTask(id)}
        key={id}
        // calculating event height = duration of event in minutes
        height={
          (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
          (1000 * 60)
        }
        description={description}
        marginTop={new Date(dateFrom).getMinutes()}
        time={`${eventStart} - ${eventEnd}`}
        title={title}
        id={id}
      />
    );
  });

  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {res}
    </div>
  );
};

export default Hour;
Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  setEvents: PropTypes.func,
};
