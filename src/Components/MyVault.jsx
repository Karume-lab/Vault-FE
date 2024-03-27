import React, { useEffect } from 'react'
import { useSnackbar } from "notistack";
import FileTableRow from './FileTableRow';

const MyVault = ({ files, setFiles, contract, account }) => {
    const { enqueueSnackbar } = useSnackbar();
    const files_ = [
        {
            owner: 'Alice',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-20T12:00:00Z',
            dateAccessed: '2024-03-20T12:00:00Z',
            isFavourite: true,
            isArchived: false,
            cid: 'QmXaP8cVwZBfQFcc5uWHci7Tcrz7KfeU5r6zEhB4vAZdwG',
            name: 'document1',
            description: 'This is the first document',
            extension: 'pdf',
            tag: 'EDUCATION'
        },
        {
            owner: 'Bob',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-21T12:00:00Z',
            dateAccessed: '2024-03-21T12:00:00Z',
            isFavourite: false,
            isArchived: true,
            cid: 'QmZndHegqSwsZCcB9i5KwwrwMcY8PXZn3tQ78zbrC2pnBT',
            name: 'document2',
            description: 'This is the second document',
            extension: 'txt',
            tag: 'FINANCE'
        },
        {
            owner: 'Carol',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-22T12:00:00Z',
            dateAccessed: '2024-03-22T12:00:00Z',
            isFavourite: true,
            isArchived: false,
            cid: 'QmZsw7JwH1hqs2qS7XGnMkQrfcHZU7hTf6RP3VQCbTgfwH',
            name: 'document3',
            description: 'This is the third document',
            extension: 'docx',
            tag: 'HEALTH'
        },
        {
            owner: 'Dave',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-23T12:00:00Z',
            dateAccessed: '2024-03-23T12:00:00Z',
            isFavourite: false,
            isArchived: false,
            cid: 'QmUeFjxFH1muZzWEQaqMqsu8EYjY5jnUJFcWmSxM7YZvWf',
            name: 'document4',
            description: 'This is the fourth document',
            extension: 'jpg',
            tag: 'BUSINESS'
        },
        {
            owner: 'Eve',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-24T12:00:00Z',
            dateAccessed: '2024-03-24T12:00:00Z',
            isFavourite: true,
            isArchived: true,
            cid: 'QmbjAuA5ndYheirtpQWtY5Mz8b2vZnmDwLqfMPmpqeuwrD',
            name: 'document5',
            description: 'This is the fifth document',
            extension: 'xlsx',
            tag: 'FAMILY'
        },
        {
            owner: 'Frank',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-25T12:00:00Z',
            dateAccessed: '2024-03-25T12:00:00Z',
            isFavourite: false,
            isArchived: false,
            cid: 'QmXwWpuEbFV3yEmeZLCeW2TeKeA42i5PmFyThczEXNkzNb',
            name: 'document6',
            description: 'This is the sixth document',
            extension: 'mp3',
            tag: 'RANDOM'
        },
        {
            owner: 'Grace',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-26T12:00:00Z',
            dateAccessed: '2024-03-26T12:00:00Z',
            isFavourite: true,
            isArchived: false,
            cid: 'QmYDe4NtuuSvNpy8noEQeM4qD1aPLoB2WW2RDahE6opDgb',
            name: 'document7',
            description: 'This is the seventh document',
            extension: 'png',
            tag: 'OTHER'
        },
        {
            owner: 'Harry',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-27T12:00:00Z',
            dateAccessed: '2024-03-27T12:00:00Z',
            isFavourite: false,
            isArchived: false,
            cid: 'QmUgdHz3N5r4NHtTFyA4xhDgCZKm5XphJ7fmyUmo1Xxr2k',
            name: 'document8',
            description: 'This is the eighth document',
            extension: 'pdf',
            tag: 'HEALTH'
        },
        {
            owner: 'Isabella',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-28T12:00:00Z',
            dateAccessed: '2024-03-28T12:00:00Z',
            isFavourite: true,
            isArchived: false,
            cid: 'QmexP2D1dZxZYroDwP9QeZGBk6uCL2kv1PFGVC1ntC8PqF',
            name: 'document9',
            description: 'This is the ninth document',
            extension: 'doc',
            tag: 'FINANCE'
        },
        {
            owner: 'Jack',
            size: "20KB",
            dateUploaded: '345083409583',
            dateModified: '2024-03-29T12:00:00Z',
            dateAccessed: '2024-03-29T12:00:00Z',
            isFavourite: false,
            isArchived: true,
            cid: 'QmQK1p3zL8vFZmXu7sTJvjfLzBSdhv5mZsDoZyA5tbxUdV',
            name: 'document10',
            description: 'This is the tenth document',
            extension: 'txt',
            tag: 'OTHER'
        }
    ];
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
