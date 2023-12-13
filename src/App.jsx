import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import Event from './components/event/Event.jsx';
import './common.scss';
import { fetchEvents, onDeleteTask } from './gateway/events';

const App = () => {
  const [events, setEvents] = useState([
    {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
    },
  ]);

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
    fetchEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
  }, []);
  const handleDelete = () => {
    onDeleteTask(events.id);
    setEvents(events);
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
        events={events}
        setEvents={setEvents}
        openModalWindow={!openModalWindow}
        hideModalWindow={hideModalWindow}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default App;
