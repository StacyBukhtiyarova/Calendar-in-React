import React from 'react';
import PropTypes from 'prop-types';
import { generateWeekRange, getWeekStartDate } from '../../utils/dateUtils';
import './header.scss';

const Header = ({ weekDates, setWeekDates, setModalWindow }) => {
  const weekDatesMonth = weekDates.map((el) =>
    el.toLocaleString('en', { month: 'short' })
  );
  const month = [...new Set(weekDatesMonth)];
  const switchNextWeek = () => {
    const newWeeks = weekDates.map((day) => {
      return new Date(new Date(day).getTime() + 604800000);
    });
    setWeekDates(newWeeks);
  };
  const switchPrevWeek = () => {
    const newWeeks = weekDates.map((day) => {
      return new Date(new Date(day).getTime() - 604800000);
    });
    setWeekDates(newWeeks);
  };
  const currentWeek = () => {
    const currentWeekDates = generateWeekRange(getWeekStartDate(new Date()));
    setWeekDates(currentWeekDates);
  };

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => setModalWindow(true)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={currentWeek}>
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={switchPrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={switchNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month[0]}</span>
        {month.length > 1 && (
          <span className="navigation__displayed-month"> - </span>
        )}
        <span className="navigation__displayed-month"> {month[1]}</span>
      </div>
    </header>
  );
};
export default Header;
Header.propTypes = {
  weekDates: PropTypes.array,
  setWeekDates: PropTypes.func,
  openModalWindow: PropTypes.func,
};
