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
import { LuChevronFirst,  LuChevronLast } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";

const FilesTable = ({ files, columns }) => {
    files = d;
    const data = useMemo(() => files, [files]);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
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
                    <input
                        className='h-7 rounded-2xl mt-2 bg-customCactus-200 ring-0 '
                        type="text"
                        value={filtering}
                        onChange={(e) => setFiltering(e.target.value)}
                    />
                    <table className='table-auto w-full max-h-full'>
                        <thead className=''>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div>
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
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className='hover:bg-customCactus-200 h-12 w-full '>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className='border-b border-customCactus-400'>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                        
                                    ))}
                                    <FileActions />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className='bg-red-300'>
                        <button onClick={() => table.setPageIndex(0)}><LuChevronFirst /></button>
                        <button
                            disabled={!table.getCanPreviousPage()}
                            onClick={() => table.previousPage()}
                        >
                            Previous Page
                        </button>
                        <button
                            disabled={!table.getCanNextPage()}
                            onClick={() => table.nextPage()}
                        >
                            <MdNavigateNext />
                        </button>
                        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
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


