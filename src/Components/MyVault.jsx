import React, { useEffect, useState } from 'react'
import File from './File';
import { useSnackbar } from "notistack";

const MyVault = ({ files, setFiles, contract, account }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [otherAddress, setOtherAddress] = useState("");
    const getdata = async () => {
        let dataArray;
        try {
            dataArray = await contract.getFiles(otherAddress || account);
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
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className='flex items-center justify-center gap-4'>
                <input
                    type="text"
                    placeholder="Enter Address"
                    value={otherAddress}
                    onChange={(e) => setOtherAddress(e.target.value)}
                    className="address border rounded p-2 lg:w-96"
                />
                <button
                    className="button bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded"
                    onClick={getdata}
                >
                    Open Vault
                </button>
            </div>
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold">My Vault</p>
            </div>
            <div className='border-t border-1 w-11/12 self-center border-customCactus-400'></div>
            <div className="flex flex-row justify-around text-xs pt-2">
                <p>Name</p>
                <p>Tag</p>
                <p>Date </p>
                <p>Size</p>
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-80 p-3">
                {files ? (
                    files.map(({ owner, dateUploaded, dateModified, dateAccessed, isFavourite, isArchived, cid, name, description, extension, tag, size }, index) => (
                        <File key={index} fileName={name} tag={tag} date={timestamp2DateTime(dateUploaded)} size={size} />
                    ))
                ) : (
                    <div className="text-customCactus-400 text-5xl font-bold text-center mt-32">NO FILES UPLOADED YET ...</div>
                )}
            </div>
        </div>
    );
}

export default MyVault
