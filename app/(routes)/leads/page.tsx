import { DataTable } from '@/components/data-table'
import React from 'react'
import { columns } from './components/columns'
import Heading from '@/components/ui/heading'



export default async function LeadsPage() {

    return (
        <div className='p-12' >
            <Heading title='Leads' />

            <DataTable searchKey="name" columns={columns} data={[]} />
        </div>
    )
}


