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
    setActive("My Vault");
    setFiles(await getdata());
  }

  const handleShareClick = async () => {
    setActive("Share");
  }

  return (
    <div className=" w-60 h-full bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <TabButton handleClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} icon={<LuUploadCloud />} text="Upload File" active={active === null} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleMyVaultClick} icon={<PiVaultBold />} text="My Vault" active={active === "My Vault"} />
        <TabButton handleClick={() => handleShareClick} icon={<IoShareSocialOutline />} text="Share" active={active === "Share"} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={() => setActive("Recents")} icon={<FaRegClock />} text="Recents" active={active === "Recents"} />
        <TabButton handleClick={() => setActive("Favorites")} icon={<MdFavoriteBorder />} text="Favorites" active={active === "Favorites"} />
        <TabButton handleClick={() => setActive("Tags")} icon={<MdOutlineBookmarkBorder />} text="Tags" active={active === "Tags"} />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={() => setActive("Storage")} icon={<GrVirtualStorage />} text="Storage" active={active === "Storage"} />
        <TabButton handleClick={() => setActive("Trash")} icon={<FaRegTrashAlt />} text="Trash" active={active === "Trash"} />
      </div>
      <div className='flex flex-col'>
        <TabButton handleClick={() => setActive("Settings")} icon={<LuSettings />} text="Settings" active={active === "Settings"} />
        <TabButton handleClick={() => setActive("Sign Out")} icon={<BiLogOut />} text="Sign Out" active={active === "Sign Out"} />
      </div>
    </div>
  );
}

export default Sidebar;
