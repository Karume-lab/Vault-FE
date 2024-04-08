import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import fileDownload from 'js-file-download';
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";


const FileActions = ({ file, contract, setToggleShareModal, toggleShareModal,setToggleEditModal, toggleEditModal}) => {
    const [fileOptionsOpen, setFileOptionsOpen] = useState(false);

    const { cid, name, extension } = file;

    const handleDownload = () => {
        axios.get(`https://ipfs.io/ipfs/${cid}`, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res?.data, `${name}.${extension}`)
            })
            .catch((error) => {
                console.error('Error downloading file:', error);
            });
    }

    const handleMarkAsFavouriteClick = async () => {
        try {
            await contract.toggleFavourite(file?.cid);
        } catch (error) {
            console.error(error);
        }
    }

    const handleShareClick = () => {
        setToggleShareModal(true);
    }

    const handleEditClick = () => {
        setToggleEditModal(true);
    }

    return (
        <td className="relative">
            <div onClick={() => setFileOptionsOpen(!fileOptionsOpen)} className="size-6 p-1 hover:bg-customCactus-100 rounded-full flex justify-center items-center">
                <SlOptions />
            </div>
            {fileOptionsOpen && (
                <div onMouseEnter={() => setFileOptionsOpen(true)} onMouseLeave={() => setFileOptionsOpen(false)} className="font-bold text-lg absolute right-0 z-10 mt-2 p-2 origin-top-right rounded-2xl bg-customCactus-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-row justify-center gap-1">
                    <div title="Edit" data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="p-1 rounded-full hover:bg-customCactus-100" onClick={() => handleEditClick()}><CiEdit /> </div>
                    <div title="Add to Favorites" className="p-1 rounded-full hover:bg-customCactus-100" onClick={() => handleMarkAsFavouriteClick()}>
                        {file?.isFavourite ? <MdFavorite /> : <MdFavoriteBorder />}
                    </div>
                    <div title="Share" className="p-1 rounded-full hover:bg-customCactus-100" onClick={handleShareClick}><IoShareSocialOutline /></div>
                    <div title="Download" className="p-1 rounded-full hover:bg-customCactus-100" onClick={() => handleDownload()}><MdOutlineFileDownload /> </div>
                    <div title="Delete" className="p-1 rounded-full hover:bg-customCactus-100 text-sm" ><FaRegTrashAlt  /> </div>
                </div>
            )}
        </td>
    );
};

export default FileActions;
