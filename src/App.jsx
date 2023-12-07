import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import {
  fetchEvents,
  onCreateTask,
  onDeleteTask,
  baseUrl,
} from './gateway/events';

const App = () => {
  const [events, setEvents] = useState([]);
  const [weekDates, setWeekDates] = useState(
    generateWeekRange(getWeekStartDate(new Date()))
  );
  const [openModalWindow, setModalWindow] = useState(false);
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
    setModalWindow(!openModalWindow);
  };
  const showModalWindow = () => {
    setModalWindow(!openModalWindow);
  };

  useEffect(() => {
    const res = (id) =>
      fetch(`${baseUrl}/${id}`)
        .then((data) => data.json())
        .then((data) => setEvents(data));
    res(events);
  }, [events]);
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
    setModalWindow(false);
  };

  const onDeleteEvent = (data) => {
    onDeleteTask(data)
      .then(() => fetchEvents())
      .then((data) => setEvents(data));
    setModalWindow(false);
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
        delete={onDeleteEvent}
        createEvent={createEvent}
        openModalWindow={!openModalWindow}
        hideModalWindow={hideModalWindow}
      />
      <Calendar weekDates={weekDates} events={events} delete={onDeleteEvent} />
    </>
  );
};
export default App;
