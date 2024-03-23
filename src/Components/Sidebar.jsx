import React from 'react';
import TabButton from './TabButton'; // Assuming Button component is in a separate file
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { PiVaultBold } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { LuSettings, LuUploadCloud } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className=" w-60 h-full bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <TabButton icon={<LuUploadCloud/>} text="Upload File" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton icon={<PiVaultBold />} text="My Vault" />
        <TabButton icon={<IoShareSocialOutline />} text="Share" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton icon={<FaRegClock />} text="Recents" />
        <TabButton icon={<MdFavoriteBorder />} text="Favorites" />
        <TabButton icon={<MdOutlineBookmarkBorder />} text="Tags" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton icon={<GrVirtualStorage />} text="Storage" />
        <TabButton icon={<FaRegTrashAlt />} text="Trash" />
      </div>
      <div className='flex flex-col'>
        <TabButton icon={<LuSettings />} text="Settings" />
        <TabButton icon={<BiLogOut />} text="Sign Out" />
      </div>
    </div>
  );
}

export default Sidebar;
