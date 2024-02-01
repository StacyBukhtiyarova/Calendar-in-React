import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';
import { fetchEvents } from './gateway/events';
import './common.scss';

const App = () => {
  const [events, setEvents] = useState([]);
  const [weekDates, setWeekDates] = useState(
    generateWeekRange(getWeekStartDate(new Date()))
  );
  const [openModalWindow, setModalWindow] = useState(false);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
  }, []);

  return (
    <>
      <Header
        setWeekDates={setWeekDates}
        weekDates={weekDates}
        setModalWindow={setModalWindow}
      />
      {openModalWindow && (
        <Modal
          events={events}
          setEvents={setEvents}
          openModalWindow={openModalWindow}
          setModalWindow={setModalWindow}
        />
      )}
      <Calendar
        weekDates={weekDates}
        events={events}
        setEvents={setEvents}
      />
    </>
  );
};
export default App;
