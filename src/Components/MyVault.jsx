import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";
import { useSnackbar } from "notistack";

const MyVault = ({ files, setFiles, contract, account }) => {
    const data = useMemo(() => files, [files]);
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const columns = [
        { id: "name", header: "File Name", accessorKey: "name" },
        {
            id: "dateUploaded",
            header: "Date Uploaded",
            accessorKey: "dateUploaded",
        },
        { id: "tag", header: "Tag", accessorKey: "tag" },
        { id: "size", header: "Size", accessorKey: "size" },
    ];

    const getdata = async () => {
        let dataArray;
        try {
            dataArray = await contract.getFiles(account);
        } catch (error) {
            enqueueSnackbar("You don't have access", { variant: "error" });
            console.error(error);
        }
        if (!dataArray) {
            setFiles(dataArray);
            enqueueSnackbar("Fetched files successfully", { variant: "success" });
        } else {
            enqueueSnackbar("No file(s) to display", { variant: "info" });
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


    useEffect(() => {
        getdata();
    });

    return (
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-3xl">MY VAULT</p>
            </div>
            <div className="border-t border-1 w-11/12 self-center border-customCactus-400"></div>
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
        </div>
    );
};

export default MyVault;
