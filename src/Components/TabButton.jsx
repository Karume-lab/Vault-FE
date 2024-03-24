import React from 'react';
import { TERipple } from "tw-elements-react";

function TabButton({ icon, text, handleClick}){
  return (
    <TERipple>
    <div onClick={handleClick} className="flex items-center xs:text-xs lg:text-lg md:text-sm hover:bg-customCactus-300 rounded-xl p-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-20  duration-300 mt-1" >
      <span className="mr-2 ">{icon}</span>
      <p className="">{text}</p>
    </div>
    </TERipple>
  );
}

export default TabButton;
