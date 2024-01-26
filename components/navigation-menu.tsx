"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavTabs } from "@/constants"
import { usePathname, useRouter } from "next/navigation"

export function NavigationMenuComponent() {

    const router = useRouter()
    const pathname = usePathname()
    const [activeTab, setActiveTab] = React.useState(); // Set the initial active tab
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {NavTabs.map((tab: any, index: any) => (
                    tab?.items?.length > 0 ? (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger>{tab.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    {tab?.items?.map((item: any, index: any) => (
                                        <ListItem
                                            key={index}
                                            href={item.href}
                                            title={item.title}
                                            isActive={pathname === item.href}
                                            onClick={() => setActiveTab(item.title)}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={index}>
                            <Link href={tab.url} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        pathname === tab.url ? "bg-primary focus:bg-primary focus:text-white hover:bg-primary text-white" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    )}
                                >
                                    {tab.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { isActive: boolean; onClick: () => void }
>(({ className, title, children, isActive, onClick, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                        isActive ? "bg-primary text-white" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    onClick={onClick}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
