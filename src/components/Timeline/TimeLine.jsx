import React from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

const TimeLine = ({ weekDates, dataDay, dataHour }) => {
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
    <span
      style={{
        marginTop: currentTimeMinutes - 59,
      }}
      className={`${
        now && year === new Date().getFullYear() ? 'red-line' : ''
      }`}></span>
  );
};
export default TimeLine;
TimeLine.propTypes = {
  weekDates: PropTypes.array,
  dataDay: PropTypes.number,
  dataHour: PropTypes.number,
};
