import React, { useState, useEffect } from "react";
import { SlOptions } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

const FileActions = () => {
    const [fileOptionsOpen, setFileOptionsOpen] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (fileOptionsOpen) {
            clearTimeout(timeoutId);
        } else {
            timeoutId = setTimeout(() => {
                setFileOptionsOpen(false);
            }, 3000);
        }

        return () => clearTimeout(timeoutId);
    }, [fileOptionsOpen]);

    return (
        <div className="relative">
            <div onClick={() => setFileOptionsOpen(!fileOptionsOpen)} className="size-6 p-1 hover:bg-customCactus-100 rounded-full flex justify-center items-center">
                <SlOptions />
            </div>

            {fileOptionsOpen && (
                <div onMouseEnter={() => setFileOptionsOpen(true)} onMouseLeave={() => setFileOptionsOpen(false)} className="font-bold text-lg absolute right-0 z-10 mt-2 p-2 origin-top-right rounded-2xl bg-customCactus-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-row justify-center gap-1">

                    <p data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="p-1 rounded-full hover:bg-customCactus-100"><CiEdit /> </p>
                    <p className="p-1 rounded-full hover:bg-customCactus-100"><MdFavoriteBorder /></p>
                    <p className="p-1 rounded-full hover:bg-customCactus-100"><IoShareSocialOutline /></p>
                    <p className="p-1 rounded-full hover:bg-customCactus-100"><MdOutlineFileDownload /> </p>


                </div>
            )}
        </div>
    );
};

export default FileActions;
