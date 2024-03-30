import React, { useMemo, useState } from 'react';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import FileActions from "./FileActions"
import d from "./dummyFiles.json";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const FilesTable = ({ files, columns }) => {
    files = d;
    const data = useMemo(() => files, [files]);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const [activeFileId, setActiveFileId] = useState(0)
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
            {(files && files.length) ?
                <>
                    <div className='flex items-center justify-end p-1 gap-1 flex-grow'>
                        <IoSearch />
                        <input
                            className='h-7 rounded-lg  bg-customCactus-200 border-customCactus-400 focus:outline-none focus:ring-2 focus:ring-customCactus-400 w-96 sm:w-60 '
                            type="text"
                            placeholder='Search'
                            value={filtering}
                            onChange={(e) => setFiltering(e.target.value)}
                        />
                    </div>

                    <table className='table-auto w-full max-h-full'>

                        <thead className=''>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="px-4 py-2"
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div className="flex items-center">
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {
                                                        { asc: "UP", desc: "DOWN" }[
                                                        header.column.getIsSorted() ?? null
                                                        ]
                                                    }
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                    {/* Additional empty cell for the action column */}
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
                                    onMouseOver={(e) => setActiveFileId(e.currentTarget.id)}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-4 py-2">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                    <FileActions file={files[activeFileId]} />
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
                <div>NO FILES UPLOADED YET ...</div>
            }
        </div>
    )
}

export default FilesTable


