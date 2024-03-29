import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/forms/userAuthForm"
import { APP_NAME, APP_SEO_TITLE } from "@/constants"
import { ModeToggle } from "@/components/theme-toggler"

// export const metadata: Metadata = {
//   title: 'Login to Admin Dashboard | APLus Laundry',
//   description: 'Login to Admin Dashboard | APLus Laundry',
// }

export default function AuthenticationPage() {

    return (
        <>

            <div className=" relative  h-screen flex flex-col md:items-center  justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">

                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:text-black dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-primary" />
                    <div className="relative z-20 flex items-center text-lg font-bold">
                        <Image
                            src={"/assets/logo/logo.svg"}
                            width={35}
                            height={35}
                            alt="Logo"
                            className="mr-2 invert dark:invert-0"
                        />
                        {APP_SEO_TITLE}
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;A Great way to Manage Your Orders.&rdquo;
                            </p>
                            <footer className="text-sm">Created By Team DesignerDudes</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8 p-12">
                    <div className="absolute top-8 right-8 flex items-center justify-center gap-4">

                        <Button variant="secondary">Reset Password</Button>
                        <ModeToggle />
                    </div>
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="relative z-20 flex justify-center w-full items-center text-lg font-bold">
                            <Image
                                src={"/assets/logo/logo.svg"}
                                width={35}
                                height={35}
                                alt="Logo"
                                className="mr-2 sepia-0 dark:invert-0"
                            />
                            <h2 className="text-md font-semibold tracking-tight">
                                {APP_NAME}
                            </h2>
                        </div>
                        <UserAuthForm />

                    </div>
                </div>
            </div>
        </>
    )
}

