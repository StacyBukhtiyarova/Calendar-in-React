import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import events, { fetchEvents, onCreateTask } from './gateway/events';

const App = () => {
  const [events, setEvents] = useState([]);
  const [weekDates, setWeekDates] = useState(
    generateWeekRange(getWeekStartDate(new Date()))
  );
  const [openModalWindow, setOpenModalWindow] = useState(false);
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
  const hideModalWindow = () => {
    setOpenModalWindow(!openModalWindow);
  };
  const showModalWindow = () => {
    setOpenModalWindow(!openModalWindow);
  };

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
  }, []);
  const createEvent = (data) => {
    onCreateTask(data)
      .then(() => {
        fetchEvents()
          .then((data) => {
            setEvents(data);
          })
          .catch((error) => {
            console.error('Ошибка при получении событий:', error);
          });
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
    setOpenModalWindow(false);
    fetchEvents();
    setEvents((data) => data);
  };
  return (
    <>
      <Header
        openModalWindow={showModalWindow}
        weekDates={weekDates}
        switchNextWeek={switchNextWeek}
        switchPrevWeek={switchPrevWeek}
        currentWeek={currentWeek}
      />
      <Modal
        createEvent={createEvent}
        openModalWindow={!openModalWindow}
        hideModalWindow={hideModalWindow}
      />
      <Calendar
        weekDates={weekDates}
        createEvent={createEvent}
        events={events}
      />
    </>
  );
};
export default App;
