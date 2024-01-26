"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { Account } from "../data/schema"
import { ColumnHeader } from "./column-header"
import { DataTableRowActions } from "./row-actions"

export const columns: ColumnDef<Account>[] = [
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
            <ColumnHeader column={column} title="Id" />
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
                        {row.original.account_name}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
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
        accessorKey: "phone",
        header: ({ column }) => (
            <ColumnHeader column={column} title="Account Owner Alias" />
        ),
        cell: ({ row }) => {


            return (
                <div className="flex space-x-2">

                    <span className="max-w-[200px] truncate font-medium">
                        {row.original.ownerAlias}
                    </span>
                </div>
            )
        },
    },

    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]