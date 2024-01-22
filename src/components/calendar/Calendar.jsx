import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';

const Calendar = ({
  weekDates,
  events,
  setEvents,
  openDeleteEvent,
  setDeleteEvent,
}) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            setDeleteEvent={setDeleteEvent}
            openDeleteEvent={openDeleteEvent}
            weekDates={weekDates}
            events={events}
            setEvents={setEvents}
          />
        </div>
      </div>
    </section>
  );
};
export default Calendar;
Calendar.propTypes = {
  weekDates: PropTypes.array,
  events: PropTypes.array,
  setEvents: PropTypes.func,
};
