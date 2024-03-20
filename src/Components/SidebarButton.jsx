import React from 'react';

function Tab({ icon, text }) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default Tab;
