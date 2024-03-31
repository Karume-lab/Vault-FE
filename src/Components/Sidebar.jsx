import React from 'react';
import TabButton from './TabButton'; // Assuming Button component is in a separate file
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { PiVaultBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { LuSettings, LuUploadCloud } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { useSnackbar } from 'notistack';

const Sidebar = ({ toggleFileUploadModal, setToggleFileUploadModal, active, setActive, contract, account, setFiles }) => {
  const { enqueueSnackbar } = useSnackbar();
  const getdata = async () => {
    let dataArray;
    try {
      dataArray = await contract.getFiles(account);
    } catch (error) {
      enqueueSnackbar("You don't have access", { variant: 'error' });
      console.error(error);
    }
    const isEmpty = dataArray.length === 0;

    if (!isEmpty) {
      enqueueSnackbar('Fetched files successfully', { variant: 'success' });
      return dataArray;
    } else {
      enqueueSnackbar('No file(s) to display', { variant: 'info' });
    }
  };
  const handleMyVaultClick = async () => {
    setActive(1);
    setFiles(await getdata());
  }

  const handleShareClick = async () => {
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


  const handleSettingsClick = async () => {
    setActive(7);
  }

  const handleSignOutClick = async () => {
    setActive(8);
  }


  return (
    <div className=" w-60 h-full bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <TabButton handleClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} icon={<LuUploadCloud />} text="Upload File" active={active === null} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleMyVaultClick} icon={<PiVaultBold />} text="My Vault" active={active === 1} />
        <TabButton handleClick={handleShareClick} icon={<IoShareSocialOutline />} text="Shared with me" active={active === 2} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleRecentsClick} icon={<FaRegClock />} text="Recents" active={active === 3} />
        <TabButton handleClick={handleFavoritesClick} icon={<MdFavoriteBorder />} text="Favorites" active={active === 4} />
        <TabButton handleClick={handleTagsClick} icon={<MdOutlineBookmarkBorder />} text="Tags" active={active === 5} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleStorageClick} icon={<GrVirtualStorage />} text="Storage" active={active === 6} />
      </div>
      <div className='flex flex-col'>
        <TabButton handleClick={handleSettingsClick} icon={<LuSettings />} text="Settings" active={active === 8} />
        <TabButton handleClick={handleSignOutClick} icon={<BiLogOut />} text="Sign Out" active={false} />
      </div>
    </div>
  );
}

export default Sidebar;
