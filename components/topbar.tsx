"use client"
import React from 'react'
import Heading from './ui/heading'
import { ComboboxDemo } from './ui/combobox'
import { ModeToggle } from './theme-toggler'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSub, DropdownMenuPortal, DropdownMenuGroup, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Bell, CalendarIcon, Cloud, CreditCard, Github, HelpCircle, Keyboard, LifeBuoy, LogOutIcon, Mail, MessageSquare, Plus, PlusCircle, RocketIcon, Search, Settings, User, UserPlus, Users } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useGlobalModal } from '@/hooks/GlobalModal'
import LogoComponent from './logo'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons'
import { Input } from './ui/input'
import { NavigationMenuComponent } from './navigation-menu'
// import toast from 'react-hot-toast'



function TopBar() {
    const router = useRouter()
    const modal = useGlobalModal()
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    return (
        <div className='py-3 bg-secondary sticky z-40 top-0  px-6 border-b-2 flex gap-10 justify-between'>
            <div className='flex items-center justify-between gap-4'>
                <LogoComponent className='object-contain w-full m-3' width={120} height={20} />
            </div>

            <div className='flex items-start justify-between w-full gap-4'>
                <div className='flex flex-col  w-full gap-4'>

                    <div className='flex items-center gap-0 w-full bg-background px-3 rounded-md '>
                        <Search className='h-4 w-4 opacity-50' />
                        <Input
                            onSelect={() => setOpen(true)}
                            className='w-full outline-none ring-0 border-0' placeholder="Type a command or search..." />
                    </div>
                    <div className='bg-background rounded-md w-fit h-10 flex items-center justify-between px-3'>

                        <NavigationMenuComponent />
                    </div>
                </div>


                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <FaceIcon className="mr-2 h-4 w-4" />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                                <RocketIcon className="mr-2 h-4 w-4" />
                                <span>Launch</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <PersonIcon className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                                <span>Mail</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <GearIcon className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>


                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-0' >
                        <Button variant='secondary' onClick={() => router.push('/login')}>
                            <Settings className='h-4 w-4' />
                        </Button>
                        <Button variant='secondary' onClick={() => router.push('/login')}>
                            <HelpCircle className='h-4 w-4' />
                        </Button>
                        <Button variant='secondary' onClick={() => router.push('/login')}>
                            <Bell className='h-4 w-4' />
                        </Button>
                        <ModeToggle />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className='w-8 h-8'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>

                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>

                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            {/* <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                onSelect={() => router.push('/team')
                                }
                            >
                                <Users className="mr-2 h-4 w-4" />
                                <span>Team</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={
                                    () => {

                                        modal.title = "Invite A New Team Member"
                                        modal.description = "Invite anyone to your team by sending them an email!"
                                        modal.children = <NewTeamMemberForm gap={2} />
                                        modal.onOpen()
                                    }
                                }>
                                <Plus className="mr-2 h-4 w-4" />
                                <span>New Team Member</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onSelect={() => { router.push('/login'); toast.success('Logged Out Successfully!') }}

                        >
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            <span>Log out</span>

                        </DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </div >
    )
}

export default TopBar