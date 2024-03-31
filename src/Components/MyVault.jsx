import React, { useEffect } from "react";
import FilesTable from "./FilesTable";

const MyVault = ({ files, account, contract, active }) => {
    const columns = [
        { id: "name", header: "File", accessorKey: "name" },
        {
            id: "dateUploaded",
            header: "Date Uploaded",
            accessorKey: "dateUploaded",
        },
        { id: "tag", header: "Tag", accessorKey: "tag" },
        { id: "size", header: "Size", accessorKey: "size" },
    ];

    return (
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-2xl">MY VAULT</p>
            </div>
            <div className="border-t border-1 w-full self-center border-customCactus-400 bg-red-700"></div>
            <FilesTable files={files} active={active} account={account} contract={contract} columns={columns} />
        </div>
    );
};

export default MyVault;
