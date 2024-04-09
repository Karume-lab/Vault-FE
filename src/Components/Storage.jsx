import React from 'react';
import FilesTable from './FilesTable';


const Storage = ({ files, account, contract, active, percentageUsed }) => {
    const columns = [
        { id: "name", header: "File", accessorKey: "name" },
        { id: "size", header: "Size", accessorKey: "size" },
    ];
    
        const progressBarWidth = `${percentageUsed}%`;


    return (
        <div className="rounded-2xl bg-customCactus-100 w-full h-full  flex flex-col p-2 text-customCactus-400">
        <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
            <p className="ml-2 font-bold text-center text-2xl">STORAGE</p>
        </div>
        <div className="border-t border-1 w-11/12 self-center border-customCactus-400"></div>
        <div className="w-full h-3 my-5 bg-customCactus-200 justify-start flex flex-col rounded-full">
            {/* Apply dynamic width */}
            <div className="bg-customCactus-400 text-xs text-customCactus-100 text-center h-full p-0.5 leading-none rounded-full" style={{ width: progressBarWidth }}>{percentageUsed}%</div>
            <p className=''> <span className='text-2xl font-bold'>2.1GB</span>  out of 15GB used</p>
        </div>
        <div className='my-5 flex justify-center'>
            <button className='bg-customCactus-200 p-3 font-semibold rounded-full shadow-customCactus-400 shadow-md hover:bg-customCactus-300 hover:text-white'>Get more Storage</button>
        </div>
        <div className='overflow-auto'>
            <p className='font-semibold tetx-lg'>Files using storage</p>
            <FilesTable files={files} active={active} account={account} contract={contract} columns={columns} />
        </div>

    </div>
    );
} 

export default Storage;
