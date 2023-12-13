import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import { onDeleteTask, fetchEvents } from '../../gateway/events';
import React, { useState, useEffect } from 'react';

const Hour = ({ dataHour, hourEvents }) => {
  const res = hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
    const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
      new Date(dateFrom).getMinutes()
    )}`;
    const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
      new Date(dateTo).getMinutes()
    )}`;

    return (
      <Event
        onClick={() => onDeleteTask(id)}
        key={id}
        //calculating event height = duration of event in minutes
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
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {res}
    </div>
  );
};

export default Hour;
