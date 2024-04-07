import React, { useState } from 'react'

const ShareModal = ({ file, contract }) => {
    const [receiver, setReceiver] = useState("");

    const handleShareClick = async () => {
        await contract.shareFile("QmbyJCKhNpQvaTsxVdatVcawZCpkFknfB9ac5pjsK7zrNx", receiver)
    }

    return (
        <div className='bg-customCactus-100 rounded-lg p-2 flex flex-col gap-3 border-2 border-customCactus-400'>
            <p className=''>Sharing {file?.name}</p>
            <div>
                <p>Enter the wallet address of the Receiver</p>
                <input
                    onChange={(e) => setReceiver(e.currentTarget.value)}
                    type="text"
                    placeholder="Receiver's address"
                    className='rounded-md'
                    value={receiver}
                />
            </div>
            <button onClick={handleShareClick} className='bg-customCactus-200 hover:bg-customCactus-300 border-2 border-customCactus-400 shadow-sm shadow-customCactus-400  rounded-md p-1'>Share</button>
        </div>
    )
}

export default ShareModal
