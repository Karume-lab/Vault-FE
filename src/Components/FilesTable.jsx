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
                        type="text"
                        value={filtering}
                        onChange={(e) => setFiltering(e.target.value)}
                    />
                    <table>
                        <thead>
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
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                    <FileActions />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div>
                        <button onClick={() => table.setPageIndex(0)}>First Page</button>
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
                            Next Page
                        </button>
                        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                            Last Page
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


