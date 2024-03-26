import React, { useState } from "react";
import { useSnackbar } from "notistack";
import TagsDropdown from "./TagsDropdown";
import axios from "axios";



const UploadModal = ({ toggleFileUploadModal, setToggleFileUploadModal, contract, account }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file selected");
    const { enqueueSnackbar } = useSnackbar();
    const [fileDescription, setFileDescription] = useState("")
    const [isFavourite, setIsFavourite] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                const fileExtension = fileName.split(".").pop();
                formData.append("file", file);

                // IPFS 是分布式的，so cannot delete once uploaded
                const resFile = await axios.post(
                    "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "pinata_api_key": import.meta.env.VITE_PINATA_API_KEY,
                            "pinata_secret_api_key": import.meta.env.VITE_PINATA_SECRET_KEY,
                        },
                    }
                );

                contract.uploadFile(account, fileName, fileDescription, fileExtension, isFavourite, 1, resFile.data.IpfsHash);
                enqueueSnackbar('Successfully Uploaded file', { variant: 'success' });
                setFileName("No file selected");
                setFile(null);
            } catch (error) {
                enqueueSnackbar('Unable to upload file to Pinata', { variant: 'error' });
                console.error(error);
            }
        } else {
            enqueueSnackbar('No file selected', { variant: 'error' });
            return;
        }
    };

    const retrieveFile = (e) => {
        const data = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };

    const handleClose = (e) => {
        if (e.target.id === "uploadFileModalContainer") setToggleFileUploadModal(!toggleFileUploadModal);
    }
    if (!toggleFileUploadModal) return null;

    return (
        <div id="uploadFileModalContainer" onClick={handleClose} className="bg-customCactus-400 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
            <div className="min-w-1/2 h-72 w-2/3 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row border-b-2 justify-between p-2">
                        <div className="flex flex-row align-middle ">
                            <p className=" text-lg font-semibold">Upload File</p>
                        </div>
                        <button onClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} >X</button>
                    </div>
                    <div className="p-2 flex flex-col">
                        <input
                            // disabled={!account}
                            type="file"
                            id="file-upload"
                            name="data"
                            onChange={retrieveFile}
                        />
                        <div>
                            <label htmlFor="isFavourite">Favourite:</label>
                            <input id="isFavourite" value={isFavourite} onChange={(e) => setIsFavourite(e.target.value)} type="checkbox" />
                        </div>
                        <textarea name="fileDescription" id="fileDescription" className="w-64 h-16" placeholder="File Description" value={fileDescription} onChange={(e) => setFileDescription(e.target.value)}></textarea>
                        <TagsDropdown contract={contract} />

                        <button
                            type="submit"
                            className={` ${account ? '' : 'cursor-not-allowed opacity-50'}`}
                            disabled={!account}
                        >
                            Upload File
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadModal;
