import React, { useMemo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import FileActions from "./FileActions"
import ShareModal from "./ShareModal";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdNavigateNext, MdPeopleAlt } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import nofile from "../assets/img/empty.png";
import EditModal from './EditModal';
import testFiles from "../MOCK_DATA/MOCK_FILES.json";

const FilesTable = ({ files, columns, active, contract }) => {
    // files = testFiles;
    const data = useMemo(() => files, [files]);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const [activeFileId, setActiveFileId] = useState(0)
    const [toggleShareModal, setToggleShareModal] = useState(false);
    const [toggleEditModal, setToggleEditModal] = useState(false);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    return (
        <div>
            {
                toggleShareModal ?
                    <ShareModal file={files[activeFileId]} contract={contract} />
                    :
                    null
            }
            {(files && files?.length) ?
                <>
                <EditModal toggleEditModal={toggleEditModal} setToggleEditModal={setToggleEditModal}  />
                    <div className='flex items-center justify-center p-1 gap-1 flex-grow'>
                        <div className='bg-customCactus-200 flex items-center p-2 rounded-lg focus:ring-22 focus:ring-customCactus-400 text-xl gap-2'>
                            <IoSearch />
                            <input
                                className='h-7 rounded-lg bg-customCactus-200  focus:outline-none focus:ring-none w-96 sm:w-60 '
                                type="text"
                                placeholder='Search'
                                value={filtering}
                                onChange={(e) => setFiltering(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className='table-auto w-full max-h-full'>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="px-4 py-2 cursor-pointer"
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div className="flex items-center">
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {
                                                        { asc: <IoIosArrowUp />, desc: <IoIosArrowDown /> }[
                                                        header.column.getIsSorted() ?? null
                                                        ]
                                                    }
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                    <th className="px-4 py-2"></th>
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    id={`${row.id}`}
                                    className='border-b border-customCactus-400 hover:bg-customCactus-200 h-12 w-full'
                                    onclick={(e) => setActiveFileId(e.currentTarget.id)}
                                >
                                    {row.getVisibleCells().map((cell, index) => (
                                        <React.Fragment key={cell.id}>
                                            {index === 0 && (
                                                <td className="px-4 py-2 flex items-center gap-2">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    {files[row.id].isShared ? <MdPeopleAlt title='This file is shared' /> : null}
                                                </td>
                                            )}
                                            {index !== 0 && (
                                                <td key={cell.id} className="px-4 py-2">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            )}
                                        </React.Fragment>
                                    ))}
                                    {active === 2 ? null :
                                        <FileActions file={files[activeFileId]} contract={contract} setToggleShareModal={setToggleShareModal} setToggleEditModal={setToggleEditModal} />}
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div className='flex justify-center gap-2 mt-2'>
                        <button onClick={() => table.setPageIndex(0)} className='bg-gray-400 rounded-sm hover:bg-customCactus-200'>
                            <LuChevronFirst />
                        </button>
                        <button
                            disabled={!table.getCanPreviousPage()}
                            onClick={() => table.previousPage()}
                            className='bg-gray-400 rounded-sm hover:bg-customCactus-200'
                        >
                            <GrFormPrevious />
                        </button>
                        <button
                            disabled={!table.getCanNextPage()}
                            onClick={() => table.nextPage()}
                            className='bg-gray-400 rounded-sm hover:bg-customCactus-200'
                        >
                            <MdNavigateNext />
                        </button>
                        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className='bg-gray-400 rounded-sm hover:bg-customCactus-200'>
                            <LuChevronLast />
                        </button>
                    </div>
                </>
                :
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <img src={nofile} alt="No files uploaded" className='size-80' />
                    <p className='text-lg'>Oops! Nothing here. </p>
                </div>
            }
        </div>
    )
}

export default FilesTable
