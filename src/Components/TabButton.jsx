import React from 'react';

function TabButton({ icon, text}) {
  return (
    <div className="flex items-center hover:bg-customCactus-300 rounded-xl p-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-20  duration-300 mt-1 ">
      <span className="mr-2 lg:text-lg ">{icon}</span>
      <a href='#' className="md:text-xl lg:text-2xl">{text}</a>
    </div>
  );
}

export default TabButton;
