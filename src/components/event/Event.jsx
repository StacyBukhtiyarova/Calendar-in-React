import React, { useState, useEffect, Component } from 'react';
import { fetchEvents } from '../../gateway/events';
const Event = ({ events }) => {
  return <div>{events.title}</div>;
};

export default Event;
