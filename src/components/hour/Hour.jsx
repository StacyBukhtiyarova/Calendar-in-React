import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

import React from 'react';

const Hour = ({ dataHour, hourEvents }) => {
  const res = hourEvents.map(({ id, dateFrom, dateTo, title }) => {
    const eventStart = `${dateFrom.getHours()}:${formatMins(
      dateFrom.getMinutes()
    )}`;
    const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;
    return (
      <Event
        key={id}
        //calculating event height = duration of event in minutes
        height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
        marginTop={dateFrom.getMinutes()}
        time={`${eventStart} - ${eventEnd}`}
        title={title}
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
