import { DataTable } from '@/components/data-table'
import Heading from '@/components/ui/heading'
import React from 'react'
import { columns } from './components/columns'
import { AccountsData } from './data/AccountsData'



export default async function AccountsPage() {

    //parse JSON data from leads.json file to be used as data prop in DataTable
    return (
        <div className='p-12' >
            <Heading title='Accounts' />

            <DataTable searchKey="name" columns={columns} data={AccountsData as any} />
        </div>
    )
}

