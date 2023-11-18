import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekDates: generateWeekRange(getWeekStartDate(new Date())),
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
  
  render() {
    //const { weekStartDate } = this.state;
    // const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekDates={this.state.weekDates}
          switchNextWeek={this.switchNextWeek}
          switchPrevWeek={this.switchPrevWeek}
          currentWeek={this.currentWeek}
        />
        <Calendar weekDates={this.state.weekDates} />
      </>
    );
  }
}

export default App;
