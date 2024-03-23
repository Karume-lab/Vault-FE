import React from 'react';
import profile from "./../assets/img/profile.png";
import logo from "../assets/img/vault-logo.png";
import key_hole from "../assets/img/key-hole-logo.png"
import { TERipple } from "tw-elements-react";


function Navbar() {
  return (
    <div className=" bg-customCactus-400 text-white h-16 w-screen flex items-center justify-between px-4">
      <div className="flex justify-evenly items-center">
        <div className='relative'>
        <img src={logo} alt="Logo" className="h-20 block w-full animate-spin-slow" />
        <img src={key_hole} alt="Second Image" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-16" />
        </div>
        <span className=" justify-self-start text-2xl font-bold">VAULT</span>
      </div>
      {/* <div className=' w-72 sm-36 md:w-96 lg:w-1/2 flex'>
        <input type="text" placeholder="Search..." className=" w-full bg-customCactus-100 text-white px-4 py-2 rounded-2xl outline-none focus:bg-customCactus-300 " />
      </div> */}
      <div className='flex flex-col items-center justify-center'>
        <TERipple>
        <img src={profile} alt="Profile" className="h-10 w-10 rounded-full bg-customCactus-200" />
        </TERipple>
        <span className=' text-xs font-bold'>0xD35...92T</span>
      </div>
    </div>
  );
}

export default Navbar;
