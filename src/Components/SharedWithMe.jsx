import React, { useEffect, useState } from "react";
import FilesTable from "./FilesTable";

const SharedWithMe = ({ account, contract, active }) => {
    const [sharedFiles, setSharedFiles] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            try {
                const dataArray = await contract.getFilesSharedWithMe();
                if (dataArray && dataArray.length > 0) {
                    setSharedFiles(dataArray);
                } else {
                }
            } catch (error) {
                console.error(error);
            }
        };
        getdata();
    }, [account, contract, setSharedFiles]);

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
            <div className="border-t border-1 w-full self-center border-customCactus-400 bg-red-700"></div>
            <FilesTable files={sharedFiles} active={active} account={account} contract={contract} columns={columns} />
        </div>
    );
};

export default SharedWithMe;
