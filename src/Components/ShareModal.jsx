import React from 'react'

const ShareModal = ({ file }) => {
    return (
        <div className='bg-customCactus-100 rounded-lg p-2 flex flex-col gap-3 border-2 border-customCactus-400'>
            <p className=''>Sharing {file.name}</p>
            <div>
                <p>Enter the wallet address of the Receiver</p>
                <input
                    type="text"
                    placeholder="Receiver's address"
                    className='rounded-md'
                />
            </div>
            <button className='bg-customCactus-200 hover:bg-customCactus-300 border-2 border-customCactus-400 shadow-sm shadow-customCactus-400  rounded-md p-1'>Send</button>
        </div>
    )
}

export default ShareModal
