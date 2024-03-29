"use client"

import * as React from "react"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Icons } from "../ui/icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { Form } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, Plus } from "lucide-react"
import toast from "react-hot-toast"
import Heading from "../ui/heading"
import { set } from "date-fns"
import { useRouter } from "next/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command"
import { Separator } from "../ui/separator"



interface NewAccountFormProps extends React.HTMLAttributes<HTMLDivElement> {
    gap: number
}

const formSchema = z.object({
    accountName: z.string().min(2,
        { message: "Name must be atleast 2 characters long" }
    ).max(50,
        { message: "Name must be less than 50 characters long" }
    ),
    website: z.string().url(),
    description: z.string().url(),
    parentAccount: z.string().url(),

    //Get in Touch
    phoneno: z.string().min(10).max(10),
    billingAddress: z.string().min(10).max(100),
    billingStreet: z.string().min(10).max(100),
    billingCity: z.string().min(10).max(100),
    billingPostalCode: z.string().min(6).max(6),
    billingState: z.string().min(2).max(50),
    billingCountry: z.string().min(2).max(50),

    shippingAddress: z.string().min(10).max(100),
    shippingStreet: z.string().min(10).max(100),
    shippingCity: z.string().min(10).max(100),
    shippingPostalCode: z.string().min(6).max(6),
    shippingState: z.string().min(2).max(50),
    shippingCountry: z.string().min(2).max(50),



})

const formSchemaOtp = z.object({
    otp: z.string().min(6).max(6,
        { message: " OTP must be 6 characters long" }
    ),

})

export function NewAccountForm({ className, gap, ...props }: NewAccountFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [currentStep, setCurrentStep] = React.useState(1)



    const stepNames = [
        {
            index: 1,
            title: "About"
        },

        {
            index: 2,
            title: "Billing Details"
        },
        {
            index: 3,
            title: "Shipping Details"
        },


    ] as any


    const totalSteps = stepNames.length



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {



        },

    })






    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Add submit logic here
        try {


        } catch (error) {
            console.error('Error creating Item:', error);
            setIsLoading(false);
            toast.error('Error creating Item');
        }


    }



    return (

        <div className={cn("grid gap-6 ", className)} {...props}>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full p-3 '>
                    <div className='flex justify-between'>
                        <Heading className='text-md' title={
                            stepNames.map((step: any) => {
                                if (step.index === currentStep) {
                                    return step.title.toString()
                                }
                            })
                        } />
                        <p className=' text-sm text-muted-foreground'>Step {currentStep} of {totalSteps}</p>

                    </div>

                    <Separator className='my-0' orientation='horizontal' />
                    {currentStep === 1 &&
                        <div className='flex flex-col gap-3'>

                            <div className={`grid grid-cols-${gap} gap-3`}>
                                {/* <div className={`grid grid-cols-2 gap-3`}> */}
                                <FormField
                                    name="accountName"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="accountName">Account Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="accountName"
                                                    placeholder="eg. John Doe"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="accountName"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.accountName?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="website"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="website">Website</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="website"
                                                    placeholder="eg. john@example.com "
                                                    type="website"
                                                    autoCapitalize="none"
                                                    autoComplete="website"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.website?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="description"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Description</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    name="parentAccount"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2">
                                            <FormLabel>Parent Account</FormLabel>
                                            <Popover>
                                                <PopoverTrigger {...field} defaultValue={field.value} asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-full justify-between",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {/* {field.value
                                                        ? AllData.find(
                                                            (data) => data._id === field.value
                                                        )?.email
                                                        : "Select Customer"} */}
                                                            Select an Account
                                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent side="right" className="w-full p-0">
                                                    <Command >
                                                        <CommandInput
                                                            placeholder="Search Customers..."
                                                            className="h-9"
                                                        />
                                                        <CommandEmpty>
                                                            <div>
                                                                No Customer found.
                                                            </div>
                                                            <div>
                                                                <Button variant="ghost" className="mt-2">
                                                                    <Plus className="h-4 w-4 mr-2" />
                                                                    Add Customer
                                                                </Button>
                                                            </div>

                                                        </CommandEmpty>
                                                        <CommandGroup>
                                                            {/* {AllData.map((data) => (
                                                        <CommandItem
                                                            value={data._id}
                                                            key={data.email}
                                                            onSelect={() => {
                                                                form.setValue("customer", data._id)
                                                            }}
                                                        >
                                                            {data.email}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    data._id === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))} */}
                                                            <CommandItem > <div className="flex flex-row items-center"> <Plus className="h-4 w-4 mr-2" /> Add Customer</div></CommandItem>
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                            {/* <FormDescription>
                                        Please select a customer from the dropdown
                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* <FormField
                            name="mobileNumber"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="mobileNumber">Mobile No.</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="mobileNumber"
                                            placeholder="eg. +91 9876543210"
                                            type="number"
                                            autoCapitalize="none"
                                            autoComplete="mobileNumber"
                                            autoCorrect="off"

                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.mobileNumber?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="address"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="address">Address</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="address"
                                            placeholder="eg. 1234 Main St"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="address"
                                            required={false}
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.address?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="city"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="city">City</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="city"
                                            placeholder="eg. Mumbai"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="city"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.city?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="state"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="state">State</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="state"
                                            placeholder="eg. Maharashtra"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="state"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.state?.message}
                                    </FormMessage>
                                </FormItem>
                            )} />
                        <FormField
                            name="pincode"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="pincode">Pincode</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="pincode"
                                            placeholder="eg. 400001"
                                            type="number"
                                            autoCapitalize="none"
                                            autoComplete="pincode"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors?.pincode?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="country"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="country">Country</FormLabel>
                                    <FormControl>

                                        <Input
                                            id="country"
                                            placeholder="eg. India"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="country"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors?.country?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        /> */}
                            </div>
                            <div className={`${gap === 2 ? 'w-full' : 'grid gap-3 grid-cols-3'}`} >
                                <Button variant="secondary" onClick={() => setCurrentStep(currentStep + 1)} className="w-full" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4  w-4 animate-spin" />
                                    )}
                                    Next
                                </Button>
                            </div>
                        </div>}

                    {
                        // Get in Touch
                        currentStep === 2 &&
                        <div className='flex flex-col gap-3'>

                            <div className={`grid grid-cols-${gap} gap-3`}>
                                {/* <div className={`grid grid-cols-2 gap-3`}> */}
                                <FormField
                                    name="phoneno"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="phoneno">Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="phoneno"
                                                    placeholder="eg. +91 9876543210"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="phoneno"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.phoneno?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="billingAddress"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2">
                                            <FormLabel>Billing Address</FormLabel>
                                            <Popover>
                                                <PopoverTrigger {...field} defaultValue={field.value} asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-full justify-between",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {/* {field.value
                                                        ? AllData.find(
                                                            (data) => data._id === field.value
                                                        )?.email
                                                        : "Select Customer"} */}
                                                            Select a Billing Address
                                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent side="right" className="w-full p-0">
                                                    <Command >
                                                        <CommandInput
                                                            placeholder="Search Customers..."
                                                            className="h-9"
                                                        />
                                                        <CommandEmpty>
                                                            <div>
                                                                No Customer found.
                                                            </div>
                                                            <div>
                                                                <Button variant="ghost" className="mt-2">
                                                                    <Plus className="h-4 w-4 mr-2" />
                                                                    Add Customer
                                                                </Button>
                                                            </div>

                                                        </CommandEmpty>
                                                        <CommandGroup>
                                                            {/* {AllData.map((data) => (
                                                        <CommandItem
                                                            value={data._id}
                                                            key={data.email}
                                                            onSelect={() => {
                                                                form.setValue("customer", data._id)
                                                            }}
                                                        >
                                                            {data.email}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    data._id === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))} */}
                                                            <CommandItem > <div className="flex flex-row items-center"> <Plus className="h-4 w-4 mr-2" /> Add Customer</div></CommandItem>
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                            {/* <FormDescription>
                                        Please select a customer from the dropdown
                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="billingStreet"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Billing Street</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="billingCity"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Billing City</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="billingCountry"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Billing Country</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />


                            </div>
                            <div className={`${gap === 2 ? 'w-full flex gap-2' : 'grid gap-3 grid-cols-3'}`} >
                                <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)} className="w-fit" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className=" h-4  w-4 animate-spin" />
                                    )}
                                    <ArrowLeft className='w-4 h-4' />
                                </Button>
                                <Button variant="secondary" onClick={() => setCurrentStep(currentStep + 1)} className="w-full" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className=" h-4  w-4 animate-spin" />
                                    )}
                                    Next
                                </Button>
                            </div>
                        </div>
                    }
                    {
                        // Get in Touch
                        currentStep === 3 &&
                        <div className='flex flex-col gap-3'>

                            <div className={`grid grid-cols-${gap} gap-3`}>
                                {/* <div className={`grid grid-cols-2 gap-3`}> */}
                                {/* <FormField
                                    name="phoneno"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="phoneno">Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="phoneno"
                                                    placeholder="eg. +91 9876543210"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="phoneno"
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.phoneno?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                /> */}
                                <FormField
                                    name="shippingAddress"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2">
                                            <FormLabel>Shipping Address</FormLabel>
                                            <Popover>
                                                <PopoverTrigger {...field} defaultValue={field.value} asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-full justify-between",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {/* {field.value
                                                        ? AllData.find(
                                                            (data) => data._id === field.value
                                                        )?.email
                                                        : "Select Customer"} */}
                                                            Select a Shipping Address
                                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent side="right" className="w-full p-0">
                                                    <Command >
                                                        <CommandInput
                                                            placeholder="Search Customers..."
                                                            className="h-9"
                                                        />
                                                        <CommandEmpty>
                                                            <div>
                                                                No Customer found.
                                                            </div>
                                                            <div>
                                                                <Button variant="ghost" className="mt-2">
                                                                    <Plus className="h-4 w-4 mr-2" />
                                                                    Add Customer
                                                                </Button>
                                                            </div>

                                                        </CommandEmpty>
                                                        <CommandGroup>
                                                            {/* {AllData.map((data) => (
                                                        <CommandItem
                                                            value={data._id}
                                                            key={data.email}
                                                            onSelect={() => {
                                                                form.setValue("customer", data._id)
                                                            }}
                                                        >
                                                            {data.email}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    data._id === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))} */}
                                                            <CommandItem > <div className="flex flex-row items-center"> <Plus className="h-4 w-4 mr-2" /> Add Customer</div></CommandItem>
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                            {/* <FormDescription>
                                        Please select a customer from the dropdown
                                    </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="shippingStreet"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Shipping Street</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="shippingCity"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Shipping City</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="shippingCountry"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="Description">Shipping Country</FormLabel>
                                            <FormControl>

                                                <Input
                                                    id="Description"
                                                    placeholder="eg. 1234 Main St"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoComplete="Description"
                                                    required={false}
                                                    autoCorrect="off"
                                                    disabled={isLoading}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {form.formState.errors.description?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />


                            </div>
                            <div className={`${gap === 2 ? 'w-full flex gap-2' : 'grid gap-3 grid-cols-3'}`} >
                                <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)} className="w-fit" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className=" h-4  w-4 animate-spin" />
                                    )}
                                    <ArrowLeft className='w-4 h-4' />
                                </Button>
                                <Button variant="secondary" type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4  w-4 animate-spin" />
                                    )}
                                    Save & New
                                </Button>
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4  w-4 animate-spin" />
                                    )}
                                    Save
                                </Button>
                            </div>
                        </div>
                    }
                </form>
            </Form>




        </div>
    )
}

