import React from "react";



function ShareModal({toggleShareModal, setToggleShareModal}){
    const handleClose = (e) => {
        if (e.target.id ===  "shareModalContainer") setToggleShareModal(!toggleShareModal);
    }

    if (!toggleShareModal) return null;

    return(
        <div id="shareModalContainer" onClick={handleClose} className="bg-customCactus-400 bg-opacity-0 backdrop-blur-sm flex justify-center items-center fixed inset-0">
            <div className="w-1/2 h-72 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <div className="flex flex-row border-b-2 justify-between p-2">
                    <div className="flex flex-row align-middle ">
                        <p className=" text-lg font-semibold">Share your Vault</p>
                    </div>
                    <button onClick={() => setToggleShareModal(!toggleShareModal)} >X</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ShareModal;
