import React from 'react'
import { TERipple } from 'tw-elements-react';
import { IoIosClose } from "react-icons/io";

const EditModal = ({toggleEditModal, setToggleEditModal}) => {

    const handleClose = (e) => {
        if (e.target.id === "editFileModalContainer") setToggleEditModal(!toggleEditModal);
    }
    
    if (!toggleEditModal) return null;

    return (
        <div>
            <div id="editFileModalContainer" onClick={handleClose} className="bg-customCactus-400 z-50 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
            <div className="min-w-1/2 h-88 w-2/3 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <form >
                    <div className="flex flex-row border-b-2 justify-between p-2">
                        <div className="flex flex-row align-middle ">
                            <p className=" text-lg font-semibold">Edit File</p>
                        </div>
                        <button onClick={() => setToggleEditModal(!toggleEditModal)} className='text-2xl' ><IoIosClose /></button>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        
                        <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white ">File name</label>
                            <textarea className="p-2 resize-none w-full h-10 text-sm text-white bg-customCactus-400 rounded-lg border border-customCactus-100 focus:ring-white focus:border-customCactus-200" placeholder="File Name" ></textarea>
                            <label htmlFor="message" className="block text-sm font-medium text-white ">Description</label>
                            <textarea className="p-2 resize-none w-full text-sm text-white bg-customCactus-400 rounded-lg border border-customCactus-100 focus:ring-white focus:border-customCactus-200" placeholder="File Description" ></textarea>
                        </div>
                        <div className="">
                            <input type="checkbox" className="w-4 h-4 text-customCactus-400 bg-customCactus-100 border-customCactus-200 rounded" />
                            <label htmlFor="isFavourite" className="m-2">Favourite</label>
                        </div>
                        <div className="">
                            <input type="checkbox" className="w-4 h-4 text-customCactus-400 bg-customCactus-100 border-customCactus-200 rounded" />
                            <label htmlFor="isFavourite" className="m-2">Archive</label>
                        </div>
                        <div className=" flex justify-around">
                            <TERipple>
                                <button
                                    className="border-2 border-customCactus-100 shadow-xl rounded-lg p-1 bg-customCactus-400 hover:bg-customCactus-300"
                                >
                                    Cancel
                                </button>
                            </TERipple>
                            <TERipple>
                                <button
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
    );
        </div>
    )
}

export default EditModal
