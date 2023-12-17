import React from 'react';

import './sidebar.scss';

const Sidebar = (props) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => {
      if ((index += 5) && index < 24) {
        return index + 1;
      } else {
        return (index -= 23);
      }
    });

  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <div className="time-slot">
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
