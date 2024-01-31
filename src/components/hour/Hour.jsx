import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import TimeLine from '../Timeline/TimeLine.jsx';

const Hour = ({
  dataDay,
  dataHour,
  hourEvents,
  setEvents,
  weekDates,
  events,
  deleteEventModal,
  setDeleteEventModal,
}) => {
  const displayedData = hourEvents.map(
    ({ id, title, dateTo, dateFrom, description }) => {
      const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
        new Date(dateFrom).getMinutes()
      )}`;
      const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
        new Date(dateTo).getMinutes()
      )}`;
      const duration =
        (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
        (1000 * 60);
      return (
        <Event
          setDeleteEventModal={setDeleteEventModal}
          deleteEventModal={deleteEventModal}
          setEvents={setEvents}
          key={id}
          height={duration}
          description={description}
          time={`${eventStart} - ${eventEnd}`}
          title={title}
          id={id}
          dateFrom={dateFrom}
          dateTo={dateTo}
          weekDates={weekDates}
          events={events}
        />
      );
    }
  );

  return (
    <div
      className={`calendar__time-slot ${
        hourEvents.length > 0 ? 'calendar__events-time-slot' : ''
      }`}
      data-time={dataHour + 1}>
      {displayedData}
      {
        <TimeLine
          weekDates={weekDates}
          dataDay={dataDay}
          dataHour={dataHour}
        />
      }
    </div>
  );
};

export default Hour;
Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  setEvents: PropTypes.func,
};
