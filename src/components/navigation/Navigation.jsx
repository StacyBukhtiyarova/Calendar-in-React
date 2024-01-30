import React from 'react';
import './navigation.scss';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils';

const today = new Date();
export function isCurrentDay(date) {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
const Navigation = ({ weekDates }) => {
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
            style={{
              backgroundColor: isCurrentDay(dayDate) ? '#AE4461' : '',
              borderRadius: 90,
            }}
            className={`day-label__day-number ${
              isCurrentDay(dayDate) ? 'calendar__current-date' : ''
            }`}>
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
Navigation.propTypes = {
  weekDates: PropTypes.array,
};
