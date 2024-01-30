import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import { isCurrentDay } from '../navigation/Navigation.jsx';
import { onDeleteTask } from '../../gateway/events.js';

const Hour = ({
  openDeleteEvent,
  setDeleteEvent,
  dataDay,
  dataHour,
  hourEvents,
  setEvents,
  weekDates,
  events,
}) => {
  const res = hourEvents.map(({ id, title, dateTo, dateFrom, description }) => {
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
        dateFrom={dateFrom}
        dateTo={dateTo}
        weekDates={weekDates}
        events={events}
      />
    );
  });

  const currentTimeMinutes = new Date().getMinutes();
  const weekDatesCurrentMonth = weekDates.map((el) =>
    el.toLocaleString('en', { month: 'short' })
  );
  const month = [...new Set(weekDatesCurrentMonth)];
  const weekDatesCurrentYear = weekDates.map((el) => el.getFullYear());
  const year = [...new Set(weekDatesCurrentYear)][0];
  const now =
    dataDay === new Date().getDate() &&
    dataHour === new Date().getHours() + 1 &&
    month[0] === new Date().toLocaleString('en', { month: 'short' }) &&
    year === new Date().getFullYear();

  return (
    <div>
      <div
        className={`calendar__time-slot ${
          hourEvents.length > 0 ? 'calendar__events-time-slot' : ''
        }`}
        data-time={dataHour + 1}>
        {/* if no events in the current hour nothing will render here */}
        {res}
        <span
          style={{
            marginTop: currentTimeMinutes - 59,
          }}
          className={`${
            now && year === new Date().getFullYear() ? 'red-line' : ''
          }`}></span>
      </div>
    </div>
  );
};

export default Hour;
Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  setEvents: PropTypes.func,
};
