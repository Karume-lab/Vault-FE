import React from 'react';
import Tab from './SidebarButton'; // Assuming Button component is in a separate file
import { SlCloudUpload } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { PiVaultBold } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { LuSettings, LuUploadCloud } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import profile from "./../assets/img/profile.png"

function Sidebar() {
  return (
    <div className=" w-60  bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <Tab icon={<LuUploadCloud/>} text="Upload File" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <Tab icon={<PiVaultBold />} text="My Vault" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <Tab icon={<FaRegClock />} text="Recents" />
        <Tab icon={<MdFavoriteBorder />} text="Favorites" />
        <Tab icon={<MdOutlineBookmarkBorder />} text="Tags" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <Tab icon={<GrVirtualStorage />} text="Storage" />
        <Tab icon={<FaRegTrashAlt />} text="Trash" />
      </div>
      <div >
        <Tab icon={<LuSettings />} text="Settings" />
        <Tab icon={<BiLogOut />} text="Sign Out" />
      </div>
    </div>
  );
}

export default Sidebar;
