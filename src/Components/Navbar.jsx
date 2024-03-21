import React from 'react';
import profile from "./../assets/img/profile.png";
import logo from "../assets/img/vault-logo.png";


function Navbar() {
  return (
    <div className=" bg-customCactus-400 text-white h-16 w-screen flex items-center justify-between px-4">
      <div className="flex justify-evenly items-center">
        <img src={logo} alt="Logo" className="h-16 " /> {/* Replace "/path/to/logo.png" with the actual path to your logo image */}
        <span className=" justify-self-start text-2xl font-bold">VAULT</span>
      </div>
      <div className="w-92">
        <input type="text" placeholder="Search..." className=" bg-customCactus-100 text-white px-4 py-2  rounded-2xl outline-none focus:bg-customCactus-300 "  />
      </div>
      <div className='rounded-full bg-customCactus-200'>
        <img src={profile} alt="Profile" className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
