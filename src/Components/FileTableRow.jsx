import React from "react";
import axios from "axios";
import fileDownload from 'js-file-download';
import { IoCloudDownloadOutline } from "react-icons/io5";


const FileTableRow = ({ fileName, tag, date, size, fileExtension, cid }) => {
    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
            .catch((error) => {
                console.error('Error downloading file:', error);
            });
    }
    return (
        <tr className="w-full h-16 shadow-xl bg-customCactus-100 rounded-lg border border-customCactus-400">
            <td className="px-4">{fileName}</td>
            <td className="px-4">{tag}</td>
            <td className="px-4">{date}</td>
            <td className="px-4">{size}</td>
            <td className="px-4">
                <button
                    className="bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDownload(`https://ipfs.io/ipfs/${cid}`, `${fileName}.${fileExtension}`)}
                > <IoCloudDownloadOutline />
                </button>
            </td>
        </tr>
    );
};

export default FileTableRow;
