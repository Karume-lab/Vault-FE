import React from 'react';

function Tab({ icon, text }) {
  return (
    <div className="flex items-center hover:bg-customCactus-300 hover:rounded-xl p-2">
      <span className="mr-2 lg:text-lg">{icon}</span>
      <a href='#' className="md:text-xl">{text}</a>
    </div>
  );
}

export default Tab;
