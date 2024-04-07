import React, { useEffect, useState } from 'react';
import testAccessors from "../MOCK_DATA/MOCK_ACCESSORS.json";
import { IoIosClose } from "react-icons/io";


const ShareModal = ({ file, contract, setToggleShareModal, toggleShareModal }) => {
    const [receiver, setReceiver] = useState('');
    const [accessors, setAccessors] = useState([]);

    const handleShareClick = async () => {
        await contract.shareFile(file?.cid, receiver);
        setReceiver('');
    };

    const handleRemoveClick = async (index) => {
        await contract.unshareFile(file?.cid, accessors[index]);
    };

    const handleClose = (e) => {
        if (e.target.id === "shareModalContainer") setToggleShareModal(false);
    }

    useEffect(() => {
        const getAccessors = async () => {
            const accessors = await contract.getFileAccessors(file?.cid);
            setAccessors(accessors);
        };
        getAccessors();
    }, [contract, file?.cid]);

    useEffect(() => {
        if (process.env.REACT_APP_IS_FRONTEND === "1") {
            setAccessors(testAccessors);
        }
    }, []);

    return (
            <div id="shareModalContainer" onClick={handleClose} className="bg-customCactus-400 z-50 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
                <div className='bg-customCactus-200 rounded-lg w-1/2 p-2 flex flex-col gap-3 border-2 border-customCactus-400 h-3/4'>
                    <div className=''>
                        <div className='flex justify-between mb-2'>
                            <p className=''> Sharing: <span className='font-semibold'>{file?.name}</span></p>
                            <button onClick={handleClose} className=' rounded-full hover:bg-red-500 p-1 hover:text-white text-2xl' ><IoIosClose /></button>
                        </div>
                        <p>Enter the wallet address of the Receiver</p>
                        <div className='flex gap-3 '>
                            <input
                                onChange={(e) => setReceiver(e.currentTarget.value)}
                                type='text'
                                placeholder="Receiver's address"
                                className='rounded-md px-2 w-full'
                                value={receiver}
                            />
                            <button onClick={handleShareClick} className='bg-customCactus-200 hover:bg-customCactus-300 border-2 border-customCactus-400 shadow-sm shadow-customCactus-400 rounded-md p-1'>Share</button>
                        </div>
                    </div>
                    <div className='border-b-2 border-customCactus-400'></div>
                        <p className='font-semibold'>Addresses with view access</p>
                    <ul className='overflow-auto '>
                        {accessors.map((accessor, index) => (
                            <li key={index} className='bg-customCactus-100 rounded-lg flex flex-row justify-between items-center p-2 m-2'>
                                <div>
                                    {accessor}
                                </div>
                                <button className='bg-customCactus-200  p-2 shadow-md rounded-lg border-customCactus-400 hover:bg-red-600 hover:text-white' onClick={() => handleRemoveClick(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    );
};

export default ShareModal;
