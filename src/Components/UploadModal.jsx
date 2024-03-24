import React from "react";



function UploadModal({toggleFileUploadModal, setToggleFileUploadModal}){
    const handleClose = (e) => {
        if (e.target.id ===  "uploadFileModalContainer") setToggleFileUploadModal(!toggleFileUploadModal);
    }

    if (!toggleFileUploadModal) return null;

    return(
        <div id="uploadFileModalContainer" onClick={handleClose} className="bg-customCactus-400 bg-opacity-0 backdrop-blur-sm flex justify-center items-center fixed inset-0">
            <div className="w-1/2 h-72 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <div className="flex flex-row border-b-2 justify-between p-2">
                    <div className="flex flex-row align-middle ">
                        <p className=" text-lg font-semibold">Upload File</p>
                    </div>
                    <button onClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} >X</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default UploadModal;
