import React from 'react';
import TabButton from './TabButton';
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { PiFoldersBold, PiVaultBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { LuSettings, LuUploadCloud } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import SignOut from './SignOut';

const Sidebar = ({ toggleFileUploadModal, setToggleFileUploadModal, active, setActive, provider, setAccount }) => {

  const handleMyVaultClick = async () => {
    setActive(1);
  }

  const handleSharedWithMeClick = async () => {
    setActive(2);
  }

  const handleRecentsClick = async () => {
    setActive(3);
  }

  const handleFavoritesClick = async () => {
    setActive(4);
  }

  const handleTagsClick = async () => {
    setActive(5);
  }

  const handleStorageClick = async () => {
    setActive(6);
  }


  const handleArchivedClick = async () => {
    setActive(7);
  }


  const handleTrashClick = async () => {
    setActive(8);
  }


  const handleSettingsClick = async () => {
    setActive(9);
  }


  return (
    <div className=" w-60 h-full bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <TabButton handleClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} icon={<LuUploadCloud />} text="Upload File" active={active === null} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleMyVaultClick} icon={<PiVaultBold />} text="My Vault" active={active === 1} />
        <TabButton handleClick={handleSharedWithMeClick} icon={<IoShareSocialOutline />} text="Shared with me" active={active === 2} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleRecentsClick} icon={<FaRegClock />} text="Recents" active={active === 3} />
        <TabButton handleClick={handleFavoritesClick} icon={<MdFavoriteBorder />} text="Favorites" active={active === 4} />
        <TabButton handleClick={handleTagsClick} icon={<MdOutlineBookmarkBorder />} text="Tags" active={active === 5} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleStorageClick} icon={<GrVirtualStorage />} text="Storage" active={active === 6} />
        <TabButton handleClick={handleArchivedClick} icon={<PiFoldersBold />} text="Archived" active={active === 7} />
        <TabButton handleClick={handleTrashClick} icon={<FaRegTrashAlt />} text="Trash" active={active === 8} />
      </div>
      <div className='flex flex-col'>
        <TabButton handleClick={handleSettingsClick} icon={<LuSettings />} text="Settings" active={active === 9} />
        <SignOut setAccount={setAccount} />
      </div>
    </div>
  );
}

export default Sidebar;
