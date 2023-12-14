import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@ui/v2/dropdown-menu";
import {Avatar, AvatarFallback} from "@ui/v2/avatar";
import {Skeleton} from "@ui/v2/skeleton";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import {signOut, useSession} from "next-auth/react";

const UserNav = ({mode}: {
    mode?: "light" | "dark"
}) => {

    const session = useSession()

    if (session.status === "loading") return <Skeleton
        className="tw-w-12 tw-h-12 tw-rounded-full tw-border tw-border-gray-600"
    />

    return (
        <>
            {session.status === "unauthenticated" && <Anchor
                path="/profile"
                className={clsx(
                    "tw-inline-block tw-px-2.5 tw-py-1.5",
                    mode === "light" &&
                    "tw-text-white hover:tw-text-white",
                    mode === "dark" && "tw-text-dark-50"
                )}
                aria-label="User Profile"
            >
                <i className="far fa-user-circle tw-text-2xl"/>
            </Anchor>}
            {session.status === "authenticated" && <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="tw-h-8 tw-w-8 tw-cursor-pointer">
                        {/*<AvatarImage src="/avatars/01.png" alt="@shadcn"/>*/}
                        <AvatarFallback>{createInitials(session?.data?.user?.name)}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="tw-w-56 tw-transition-all tw-duration-500"
                    align="end"
                    forceMount
                >
                    <DropdownMenuLabel className="tw-font-normal">
                        <div className="tw-flex tw-flex-col tw-space-y-1">
                            <p className="tw-text-sm tw-font-medium tw-leading-none">
                                {session.data.user?.name}
                            </p>
                            <p className="tw-text-xs tw-leading-none twe-text-muted-foreground">
                                {session.data.user?.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => signOut()}>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>}
        </>
    );
};

function createInitials(name: string | undefined | null) {
    return name
        ?.split(' ')    // Split the name into an array of words
        .map((part: string) => part[0])    // Map each word to its first character
        .join('')    // Join all the first characters together
        .toUpperCase();    // Convert to uppercase
}

export default UserNav;