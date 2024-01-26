import { DataTable } from '@/components/data-table'
import Heading from '@/components/ui/heading'
import React from 'react'
import { columns } from './components/columns'
import { AccountsData } from './data/AccountsData'
import { Button } from '@/components/ui/button'



export default async function AccountsPage() {

    //parse JSON data from leads.json file to be used as data prop in DataTable
    return (
        <div className='p-12' >
            <div className='flex  justify-between '>
                <Heading title='Accounts' />
                <div className='flex justify-between gap-2'>
                    <Button> New </Button>
                    <Button variant="outline"> Import </Button>
                </div>

            </div>

            <DataTable searchKey="name" columns={columns} data={AccountsData as any} />
        </div>
    )
}

