import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import FilesTable from "./FilesTable";

const SharedWithMe = ({ files, setFiles, contract, account, active }) => {
    const { enqueueSnackbar } = useSnackbar();
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

    const getdata = async () => {
        let dataArray;
        try {
            dataArray = await contract.getFiles(account);
        } catch (error) {
            enqueueSnackbar("You don't have access", { variant: "error" });
            console.error(error);
        }
        if (!dataArray) {
            setFiles(dataArray);
            enqueueSnackbar("Fetched files successfully", { variant: "success" });
        } else {
            enqueueSnackbar("No file(s) to display", { variant: "info" });
        }
    };

    const timestamp2DateTime = (timestamp) => {
        let date;
        if (timestamp.toString() === "0") {
            date = null;
        } else {
            date = new Date(timestamp * 1000).toUTCString();
        }
        return date;
    };

    useEffect(() => {
        getdata();
    });

    return (
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-3xl">SHARED FILES</p>
            </div>
            <div className="border-t border-1 w-11/12 self-center border-customCactus-400"></div>
            <FilesTable active={active} files={files} columns={columns} />
        </div>
    );
};

export default SharedWithMe;
