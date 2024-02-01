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
  deleteEventModal,
  setDeleteEventModal,
  setModalWindow,
}) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            deleteEventModal={deleteEventModal}
            setDeleteEventModal={setDeleteEventModal}
            weekDates={weekDates}
            events={events}
            setEvents={setEvents}
            setModalWindow={setModalWindow}
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
  deleteEventModal: PropTypes.bool,
  setDeleteEventModal: PropTypes.func,
  setModalWindow: PropTypes.func,
};
