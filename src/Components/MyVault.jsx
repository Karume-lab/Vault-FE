import React from 'react'
import File from './File';

const MyVault = () => {
    return (
        <div className="rounded-2xl bg-customCactus-100  h-full flex flex-col p-2">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold">My Vault</p>
            </div>
            <div className='border-t border-1 w-11/12 self-center border-black'></div>
            <div className="flex flex-row justify-around text-xs pt-2">
                <p>Name</p>
                <p>Tag</p>
                <p>Date </p>
                <p>Size</p>
            </div>
            <div className="gap-2 flex flex-col ">
                <File fileName="Certificate" tag="Education" date="12/3/1988" size="123KB" />
            </div>

        </div>

    );
}

export default MyVault
