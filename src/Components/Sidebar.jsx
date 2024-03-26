import React from 'react';
import TabButton from './TabButton';
import { PiVaultBold } from "react-icons/pi";
import { LuUploadCloud } from "react-icons/lu";
import { useSnackbar } from 'notistack';

const Sidebar = ({ toggleFileUploadModal, setToggleFileUploadModal, setActive, contract, account, setFiles }) => {
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

  return (
    <div className=" w-60 h-full bg-customCactus-400 text-white flex flex-col rounded-2xl p-2 justify-between ">
      <div className='flex flex-col'>
        <TabButton handleClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} icon={<LuUploadCloud />} text="Upload File" />
        <div className='border-t-2 w-3/4 self-center m-1'></div>
        <TabButton handleClick={handleMyVaultClick} icon={<PiVaultBold />} text="My Vault" />
      </div>
    </div>
  );
}

export default Sidebar;
