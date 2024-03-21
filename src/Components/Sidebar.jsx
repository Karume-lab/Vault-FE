import React from 'react';
import Tab from './SidebarButton'; // Assuming Button component is in a separate file
import { SlCloudUpload } from "react-icons/sl";
import { CiClock1, CiSettings } from "react-icons/ci";
import { MdFavorite, MdOutlineBookmarkBorder  } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { PiVaultLight } from "react-icons/pi";

function Sidebar() {
  return (
    <div className=" w-60  bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <Tab icon={<SlCloudUpload />} text="Upload file" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <Tab icon={<PiVaultLight />} text="My Vault" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <Tab icon={<CiClock1 />} text="Recents" />
        <Tab icon={<MdFavorite />} text="Favorites" />
        <Tab icon={<MdOutlineBookmarkBorder />} text="Tags" />
      </div>
      <div >
        <Tab icon={<GrVirtualStorage />} text="Storage" />
        <Tab icon={<CiSettings />} text="Settings" />
      </div>
      </div>
  );
}

export default Sidebar;
