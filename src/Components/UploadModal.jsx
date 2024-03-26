import React from "react";
import { LuUploadCloud } from "react-icons/lu";
import { TERipple } from "tw-elements-react";



const UploadModal = ({ toggleFileUploadModal, setToggleFileUploadModal }) => {
    const handleClose = (e) => {
        if (e.target.id === "uploadFileModalContainer") setToggleFileUploadModal(!toggleFileUploadModal);
    }

    if (!toggleFileUploadModal) return null;

    return (
        <div id="uploadFileModalContainer" onClick={handleClose} className="bg-customCactus-400 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
            <div className="min-w-1/2 h-72 w-2/3 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <div className="flex flex-row border-b-2 justify-between p-2">
                    <div className="flex flex-row align-middle ">
                        <p className=" text-lg font-semibold">Upload File</p>
                    </div>
                    <button onClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} >X</button>
                </div>
                <div className="p-2 flex flex-col">
                    <TERipple>
                        <button className="bg-customCactus-400 w-28 shadow-xl shadow-customCactus-400 border-2 border-customCactus-300 rounded-xl p-1  flex flex-row items-center gap-2">
                            {<LuUploadCloud />}
                            <span className="">Upload file</span>
                        </button>
                        <input type="text" name="" id="" />
                    </TERipple>
                    <span>File name</span>
                    <input type="text" placeholder="File name" />
                    <span>Choose category</span>

                </div>
            </div>
        </div>
    );
}

export default UploadModal;
