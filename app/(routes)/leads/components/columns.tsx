"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { Lead } from "../data/schema"
import { ColumnHeader } from "./column-header"
import { DataTableRowActions } from "./row-actions"

export const columns: ColumnDef<Lead>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Leads" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex space-x-2">

                    <span className="max-w-[500px] truncate font-medium">
                        {row.original.name}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex space-x-2">

                    <span className="max-w-[200px] truncate font-medium">
                        {row.original.email}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "phone",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Phone" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex space-x-2">

                    <span className="max-w-[200px] truncate font-medium">
                        {row.original.phone}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex space-x-2">

                    <span className="max-w-[200px] truncate font-medium">
                        {row.original.title}
                    </span>
                </div>
            )
        },
    },

    {
        accessorKey: "company",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Company" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex items-center">

                    <span>{row.original.company}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "leadStatus",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex w-[100px] items-center">

                    <span>{row.original.leadStatus}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]