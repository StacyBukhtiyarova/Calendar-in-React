import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import events from './gateway/events.js';
class App extends Component {
  state = {
    weekDates: generateWeekRange(getWeekStartDate(new Date())),
    openModalWindow: false,
    events,
  };
  switchNextWeek = () => {
    const newWeeks = this.state.weekDates.map((day) => {
      return new Date(new Date(day).getTime() + 604800000);
    });
    this.setState({
      weekDates: newWeeks,
    });
  };
  switchPrevWeek = () => {
    const newWeeks = this.state.weekDates.map((day) => {
      return new Date(new Date(day).getTime() - 604800000);
    });
    this.setState({
      weekDates: newWeeks,
    });
  };
  currentWeek = () => {
    const currentWeekDates = generateWeekRange(getWeekStartDate(new Date()));
    this.setState({
      weekDates: currentWeekDates,
    });
  };
  hideModalWindow = () => {
    this.setState({
      openModalWindow: !this.state.openModalWindow,
    });
  };
  showModalWindow = () => {
    this.setState({
      openModalWindow: !this.state.openModalWindow,
    });
  };
  createEvent = (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="title"]');
    const description = document.querySelector('textarea[name="description"]');
    const dateFrom = document.querySelector("input[name='date']");
    newEvent.id = this.state.events.length;
    newEvent.title = title.value;
    newEvent.description = description.value;
    //newEvent.dateFrom = new Date(dateFrom)
    events.push(newEvent);
    console.log(this.state.events);
  };
  render() {
    //const { weekStartDate } = this.state;
    // const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    const { openModalWindow, weekDates } = this.state;

    return (
      <>
        <Header
          openModalWindow={this.showModalWindow}
          weekDates={weekDates}
          switchNextWeek={this.switchNextWeek}
          switchPrevWeek={this.switchPrevWeek}
          currentWeek={this.currentWeek}
        />
        <Modal
          createEvent={this.createEvent}
          openModalWindow={!openModalWindow}
          hideModalWindow={this.hideModalWindow}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}
export default App;
