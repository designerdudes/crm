import { DataTable } from '@/components/data-table'
import Heading from '@/components/ui/heading'
import React from 'react'
import { columns } from './components/columns'


export default async function LeadsPage() {
    return (
        <div className='p-12' >
            <Heading title='Accounts' />

            <DataTable searchKey="name" columns={columns} data={[]} />
        </div>
    )
}

