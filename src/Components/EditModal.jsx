import React, { useState } from 'react'
import { TERipple } from 'tw-elements-react';
import { IoIosClose } from "react-icons/io";
import TagsDropdown from './TagsDropdown';

const EditModal = ({ file, toggleEditModal, setToggleEditModal, contract }) => {
    const [fileName, setFileName] = useState(file?.name);
    const [fileDescription, setFileDescription] = useState(file?.description)
    const [isFavourite, setIsFavourite] = useState(file?.isFavourite)
    const [isArchived, setIsArchived] = useState(file?.isArchived)
    const [tag, setTag] = useState(file?.tag);

    const handleClose = (e) => {
        if (e.target.id === "editFileModalContainer") setToggleEditModal(!toggleEditModal);
    }

    const handleSave = async () => {
        await contract.editFile(file?.cid, fileName, fileDescription, isFavourite, isArchived, tag);
    }


    if (!toggleEditModal) return null;

    return (
        <div>
            <div id="editFileModalContainer" onClick={handleClose} className="bg-customCactus-400 z-50 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
                <div className="min-w-1/2 h-88 w-2/3 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                    <form>
                        <div className="flex flex-row border-b-2 justify-between p-2">
                            <div className="flex flex-row align-middle ">
                                <p className=" text-lg font-semibold">Edit File</p>
                            </div>
                            <button onClick={() => setToggleEditModal(!toggleEditModal)} className='text-2xl' ><IoIosClose /></button>
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white ">File name</label>
                                <textarea onChange={(e) => setFileName(e.currentTarget.value)} className="p-2 resize-none w-full h-10 text-sm text-white bg-customCactus-400 rounded-lg border border-customCactus-100 focus:ring-white focus:border-customCactus-200" placeholder="File Name" value={fileName}></textarea>
                                <label htmlFor="message" className="block text-sm font-medium text-white ">Description</label>
                                <textarea onChange={(e) => setFileDescription(e.currentTarget.value)} className="p-2 resize-none w-full text-sm text-white bg-customCactus-400 rounded-lg border border-customCactus-100 focus:ring-white focus:border-customCactus-200" placeholder="File Description" value={fileDescription}></textarea>
                            </div>
                            <div>
                                <label htmlFor="isFavourite" className="m-2">Favourite</label>
                                <input onChange={(e) => setIsFavourite(e.currentTarget.value)} checked={isFavourite} type="checkbox" className="w-4 h-4 text-customCactus-400 bg-customCactus-100 border-customCactus-200 rounded" />
                            </div>
                            <div>
                                <label htmlFor="isFavourite" className="m-2">Archive</label>
                                <input onChange={(e) => setIsArchived(e.currentTarget.value)} checked={isArchived} type="checkbox" className="w-4 h-4 text-customCactus-400 bg-customCactus-100 border-customCactus-200 rounded" />
                            </div>
                            <TagsDropdown tag={tag} setTag={setTag} contract={contract} />
                            <div className=" flex justify-around">
                                <TERipple>
                                    <button onClick={(e) => handleClose(e)}
                                        className="border-2 border-customCactus-100 shadow-xl rounded-lg p-1 bg-customCactus-400 hover:bg-customCactus-300"
                                    >
                                        Cancel
                                    </button>
                                </TERipple>
                                <TERipple>
                                    <button onClick={handleSave}
                                        className="border-2 border-customCactus-100  shadow-xl rounded-lg p-1 bg-customCactus-400 hover:bg-customCactus-300"
                                    >
                                        Save
                                    </button>
                                </TERipple>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditModal
