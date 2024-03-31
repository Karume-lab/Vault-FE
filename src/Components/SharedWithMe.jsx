import React from "react";
import FilesTable from "./FilesTable";

const SharedWithMe = ({ files, account, contract, active }) => {
    const columns = [
        {
            id: "owner", header: "Owner", accessorKey: "owner"
        },
        { id: "name", header: "File", accessorKey: "name" },
        {
            id: "dateAccessed",
            header: "Date Accessed",
            accessorKey: "dateAccessed",
        },
        { id: "tag", header: "Tag", accessorKey: "tag" },
        { id: "size", header: "Size", accessorKey: "size" },
    ];

    return (
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-3xl">SHARED FILES</p>
            </div>
            <div className='border-t border-1 w-11/12 self-center border-customCactus-400'></div>
            <div className="flex flex-row justify-around text-xs pt-2">
                <p>Name</p>
                <p>Tag</p>
                <p>Owner</p>
                <p>Date Accessed</p>
                <p>Size</p>
            </div>
        </div>
    );
};

export default SharedWithMe;
