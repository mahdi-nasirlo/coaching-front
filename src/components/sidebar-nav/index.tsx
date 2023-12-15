"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@ui/v2/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function SidebarNav({className, items, ...props}: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav
            className={cn(
                "tw-flex tw-space-x-2 lg:tw-flex-col lg:tw-space-x-0 lg:tw-space-y-1",
                className
            )}
            {...props}
        >
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    style={{justifyContent: "start"}}
                    className={cn(
                        "tw-justify-start",
                        buttonVariants({variant: "ghost"}),
                        pathname === item.href
                            ? "tw-bg-muted tw-hover:bg-muted"
                            : "tw-hover:bg-transparent tw-hover:underline",
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}