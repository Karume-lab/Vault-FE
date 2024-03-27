import React, { useEffect } from 'react'
import { useSnackbar } from "notistack";
import FileTableRow from './FileTableRow';

const MyVault = ({ files, setFiles, contract, account }) => {
    const { enqueueSnackbar } = useSnackbar();
    const getdata = async () => {
        let dataArray;
        try {
            dataArray = await contract.getFiles(account);
        } catch (error) {
            enqueueSnackbar("You don't have access", { variant: 'error' });
            console.error(error);
        }
        if (!dataArray) {
            setFiles(dataArray);
            enqueueSnackbar('Fetched files successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('No file(s) to display', { variant: 'info' });
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
        <div className="rounded-2xl bg-customCactus-100 h-full flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl text-center rounded-t-2xl">
                <span className="ml-2 font-bold text-2xl">MY VAULT</span>
                <div className="border-t border-1 w-11/12 self-center border-customCactus-400 m-4"></div>
            </div>
            <div className="flex-1">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="">Name</th>
                            <th className="">Tag</th>
                            <th className="">Date</th>
                            <th className="">Size</th>
                            <th className="">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {files ? (
                                files.map(({ owner, dateUploaded, dateModified, dateAccessed, isFavourite, isArchived, cid, name, description, extension, tag, size }, index) => (
                                    <FileTableRow key={index} fileName={name} tag={tag} date={timestamp2DateTime(dateUploaded)} fileExtension={extension} cid={cid} size={size} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-customCactus-400 text-5xl font-bold">NO FILES UPLOADED YET ...</td>
                                </tr>
                            )}
                        </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyVault
