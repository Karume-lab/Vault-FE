import React, { useState } from 'react';
import FilesTable from './FilesTable';

const Tags = ({ files, account, contract }) => {
    const [activeTab, setActiveTab] = useState('OTHER');

    const handleTabClick = (tag) => {
        setActiveTab(tag);
    };

    const columns = [
        { id: "name", header: "File", accessorKey: "name" },
        { id: "dateUploaded", header: "Date Uploaded", accessorKey: "dateUploaded" },
        { id: "tag", header: "Tag", accessorKey: "tag" },
        { id: "size", header: "Size", accessorKey: "size" },
    ];

    const tags = [
        "OTHER", "EDUCATION", "HEALTH", "FINANCE", "BUSINESS", "FAMILY", "RANDOM"
    ];

    return (
        <div className="rounded-2xl bg-customCactus-100 h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-2xl">TAGS</p>
            </div>
            <div className='border-t border-1 w-11/12 self-center border-customCactus-400'></div>
            <div className="flex justify-center space-x-4 mt-4">
                {tags.map(tag => (
                    <button
                        key={tag}
                        className={`flex items-center text-md hover:bg-customCactus-300 rounded-xl font-normal mb-4 p-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-20  duration-300 mt-3 ${
                            activeTab === tag ? 'bg-customCactus-200 text-customCactus-800' : 'bg-customCactus-400 text-customCactus-200'
                        }`}
                        onClick={() => handleTabClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <FilesTable files={files.filter(file => file.tag === tags.indexOf(activeTab))} active={activeTab} account={account} contract={contract} columns={columns} />
        </div>
    );
};

export default Tags;
