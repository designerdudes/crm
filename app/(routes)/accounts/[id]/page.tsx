"use client"
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { LucidePlusCircle, LucideUserPlus2, Pen, PlusIcon, User, User2 } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { useGlobalModal } from '@/hooks/GlobalModal'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import GraphsComponent from '@/components/graphs'
import { NewAccountForm } from '@/components/forms/newAccountForm'

interface Props {
    params: {
        id: string
    }
}



function Page({ params }: Props) {
    const GlobalModal = useGlobalModal();

    return (
        <div className=' mx-auto px-4 py-4 w-full'>
            <div className='flex  justify-between'>
                <div className='flex flex-col justify-between'>
                    <span className='text-sm text-gray-500'>Account</span>
                    <div className='flex items-center gap-3'>
                        <Heading className='text-3xl' title='Arshad' />
                        <User className='h-8 w-8 text-gray-700' />
                    </div>
                </div>
                <div>
                    <DropdownMenu  >
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline'>Create New <PlusIcon className='w-4 ml-2' /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-48'>
                            <DropdownMenuLabel>Create</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => {
                                GlobalModal.title = "Create New Order"
                                GlobalModal.description = "Create a new order for a customer"
                                GlobalModal.children = <NewAccountForm gap={2} />
                                GlobalModal.onOpen()
                            }}>
                                <LucidePlusCircle className='w-4 mr-2' />

                                New Contact

                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => {
                                GlobalModal.title = "Select Customer Type"
                                GlobalModal.description = "Please select the type of customer you would like to create"

                                GlobalModal.onOpen()

                            }}>
                                <LucidePlusCircle className='w-4 mr-2' />
                                New Opportunity
                            </DropdownMenuItem>




                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant='outline' className='ml-2'>Edit <Pen className='w-4 ml-2' /></Button>
                </div>
            </div>
            <div className='mt-4 grid grid-cols-2 '>
                <Card className=''>
                    <h1>Test</h1>
                </Card>
                <Card className='mt-4 grid grid-cols-2'>
                    <h1>Test</h1>
                </Card>
            </div>
        </div>
    )
}

export default Page
