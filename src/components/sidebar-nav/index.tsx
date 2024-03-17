"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@ui/v2/button";

export interface AccountItemMenu {
    href: string;
    title: string;
    regex?: RegExp;
    activeIn?: string[];
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: AccountItemMenu[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                "tw-flex tw-space-x-2 lg:tw-flex-col lg:tw-space-x-0 lg:tw-space-y-1",
                className
            )}
            {...props}
        >
            {items.map((item) => (
                <>
                    <div className="tw-flex tw-items-center">
                        <div className="tw-bg-primary tw-w-1 tw-h-full"></div>
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{ justifyContent: "start" }}
                            className={cn(
                                "tw-justify-start tw-rounded-lg tw-flex-grow",
                                buttonVariants({ variant: "ghost" }),
                                pathname === item.href ||
                                    item.regex?.test(`${pathname}`) ||
                                    item.activeIn?.includes(`${pathname}`)
                                    ? "tw-bg-primary tw-text-white hover:tw-text-muted tw-hover:bg-muted"
                                    : "tw-hover:bg-transparent tw-hover:underline"
                            )}
                        >
                            {item.title}
                        </Link>
                    </div>
                </>
            ))}
        </nav>
    );
}
