import React from 'react';

function Tab({ icon, text }) {
  return (
    <div className="flex items-center hover:bg-customCactus-300 hover:rounded-xl p-2 lg:p-3">
      <span className="mr-2 lg:text">{icon}</span>
      <a href='#' className=' lg:text-xl '>{text}</a>
    </div>
  );
}

export default Tab;
