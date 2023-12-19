import React from 'react';
import './navigation.scss';
import { days } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';
const Navigation = ({ weekDates }) => {
  const today = new Date();

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div
          key={dayDate}
          className={`calendar__day-label day-label ${
            isCurrentDay(dayDate) ? 'calendar__week-date' : ''
          }`}>
          <span
            className={`day-label__day-name ${
              isCurrentDay(dayDate) ? 'calendar__current-day' : ''
            }`}>
            {days[dayDate.getDay()]}
          </span>
          <span
            className={`day-label__day-number ${
              isCurrentDay(dayDate) ? 'calendar__current-date' : ''
            }`}>
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
  function isCurrentDay(date) {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
};

export default Navigation;
Navigation.propTypes = {
  weekDates: PropTypes.array,
};
