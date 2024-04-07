import React, { useState } from "react";
import { useSnackbar } from "notistack";
import TagsDropdown from "./TagsDropdown";
import axios from "axios";
import { TERipple } from "tw-elements-react";


const UploadModal = ({ toggleFileUploadModal, setToggleFileUploadModal, contract, account }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file selected");
    const [tag, setTag] = useState(0);
    const [fileSize, setFileSize] = useState(0);
    const [fileDescription, setFileDescription] = useState("")
    const [isFavourite, setIsFavourite] = useState(0)
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (file) {
                try {
                    const formData = new FormData();
                    const fileExtension = fileName.split(".").pop();
                    formData.append("file", file);

                    const resFile = await axios.post(
                        "https://api.pinata.cloud/pinning/pinFileToIPFS",
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                                "pinata_api_key": process.env.REACT_APP_PINATA_API_KEY,
                                "pinata_secret_api_key": process.env.REACT_APP_PINATA_SECRET_KEY,
                            },
                        }
                    );
                    contract.uploadFile(
                        resFile.data.IpfsHash,
                        fileName,
                        fileDescription,
                        isFavourite,
                        fileSize,
                        fileExtension,
                        tag
                    );
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
        } catch (error) {
            console.error(error);
        } finally {
            setFile(null);
            setFileName("No file selected");
            setIsFavourite(false);
            setFileDescription("")
            setTag(0);
            setToggleFileUploadModal(false);
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
        setFileSize(e.target.files[0].size);
        e.preventDefault();
    };

    const handleClose = (e) => {
        if (e.target.id === "uploadFileModalContainer") setToggleFileUploadModal(!toggleFileUploadModal);
    }
    if (!toggleFileUploadModal) return null;

    return (
        <div id="uploadFileModalContainer" onClick={handleClose} className="bg-customCactus-400 z-50 bg-opacity-0 backdrop-blur-sm h-full w-full flex justify-center items-center absolute top-0">
            <div className="min-w-1/2 h-88 w-2/3 bg-customCactus-300 text-white rounded-lg p-2 flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row border-b-2 justify-between p-2">
                        <div className="flex flex-row align-middle ">
                            <p className=" text-lg font-semibold">Select File to Upload</p>
                        </div>
                        <button onClick={() => setToggleFileUploadModal(!toggleFileUploadModal)} >X</button>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        <input
                            className="block w-full p-2 text-sm text-white border border-customCactus-100 rounded-lg cursor-pointer bg-customCactus-400  focus:outline-none "
                            disabled={!account}
                            type="file"
                            id="file-upload"
                            name="data"
                            onChange={retrieveFile}
                        />
                        <div className="">
                            <input id="isFavourite" checked={isFavourite} onChange={(e) => setIsFavourite(e.target.value)} type="checkbox" className="w-4 h-4 text-customCactus-400 bg-customCactus-100 border-customCactus-200 rounded" />
                            <label htmlFor="isFavourite" className="m-2">Favourite</label>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white ">Description</label>
                            <textarea name="fileDescription" id="fileDescription" className="p-2 resize-none w-full text-sm text-white bg-customCactus-400 rounded-lg border border-customCactus-100 focus:ring-white focus:border-customCactus-200" placeholder="File Description" value={fileDescription} onChange={(e) => setFileDescription(e.target.value)}></textarea>
                        </div>

                        <TagsDropdown tag={tag} setTag={setTag} contract={contract} />

                        <div className=" flex justify-center">
                            <TERipple>
                                <button
                                    className="border-2  shadow-xl rounded-lg p-1 bg-customCactus-400 hover:bg-customCactus-300"
                                >
                                    Upload
                                </button>
                            </TERipple>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadModal;
