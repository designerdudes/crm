"use client"
import { DataTable } from '@/components/data-table'
import Heading from '@/components/ui/heading'
import React from 'react'
import { columns } from './components/columns'
import { AccountsData } from './data/AccountsData'
import { Button } from '@/components/ui/button'
import { useGlobalModal } from '@/hooks/GlobalModal'
import { NewAccountForm } from '@/components/forms/newAccountForm'



export default function AccountsPage() {
    const globalModal = useGlobalModal()
    //parse JSON data from leads.json file to be used as data prop in DataTable
    return (
        <div className='p-12' >
            <div className='flex  justify-between '>
                <Heading title='Accounts' />
                <div className='flex justify-between gap-2'>
                    <Button
                        onClick={() => {
                            globalModal.title = "Create New Account"
                            globalModal.description = "Create a new account"
                            globalModal.children = <NewAccountForm gap={2} />
                            globalModal.onOpen()
                        }}
                    > New </Button>
                    <Button variant="outline"> Import </Button>
                </div>

            </div>

            <DataTable searchKey="name" columns={columns} data={AccountsData as any} />
        </div>
    )
}

