import React, { useEffect, useState } from 'react';
import testAccessors from "../MOCK_DATA/MOCK_ACCESSORS.json";

const ShareModal = ({ file, contract }) => {
    const [receiver, setReceiver] = useState('');
    const [accessors, setAccessors] = useState([]);

    const handleShareClick = async () => {
        await contract.shareFile(file?.cid, receiver);
        setReceiver('');
    };

    const handleRemoveClick = async (index) => {
        await contract.unshareFile(file?.cid, accessors[index]);
    };

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
        <div className='bg-customCactus-100 rounded-lg p-2 flex flex-col gap-3 border-2 border-customCactus-400'>
            <p className=''>Sharing {file?.name}</p>
            <div>
                <p>Enter the wallet address of the Receiver</p>
                <input
                    onChange={(e) => setReceiver(e.currentTarget.value)}
                    type='text'
                    placeholder="Receiver's address"
                    className='rounded-md'
                    value={receiver}
                />
            </div>
            <ul>
                {accessors.map((accessor, index) => (
                    <li key={index}>
                        {accessor}
                        <button onClick={() => handleRemoveClick(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleShareClick} className='bg-customCactus-200 hover:bg-customCactus-300 border-2 border-customCactus-400 shadow-sm shadow-customCactus-400 rounded-md p-1'>Share</button>
        </div>
    );
};

export default ShareModal;
