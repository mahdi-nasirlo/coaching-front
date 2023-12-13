"use client"

import React from 'react';
import {Button} from "@ui/v2/button";
import {Avatar, AvatarFallback, AvatarImage} from "@ui/v2/avatar";


const UserNav = () => {
    return (
        <div>
            {/*<DropdownMenu>*/}
            {/*    <DropdownMenuTrigger asChild>*/}
            <Button variant="ghost" className="tw-relative tw-h-8 tw-w-8 tw-rounded-full">
                <Avatar className="tw-h-8 tw-w-8">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn"/>
                    <AvatarFallback>SC</AvatarFallback>
                </Avatar>
            </Button>
            {/*    </DropdownMenuTrigger>*/}
            {/*    <DropdownMenuContent className="w-56" align="end" forceMount>*/}
            {/*        <DropdownMenuLabel className="font-normal">*/}
            {/*            <div className="flex flex-col space-y-1">*/}
            {/*                <p className="text-sm font-medium leading-none">shadcn</p>*/}
            {/*                <p className="text-xs leading-none text-muted-foreground">*/}
            {/*                    m@example.com*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </DropdownMenuLabel>*/}
            {/*        <DropdownMenuSeparator/>*/}
            {/*        <DropdownMenuGroup>*/}
            {/*            <DropdownMenuItem>*/}
            {/*                Profile*/}
            {/*                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
            {/*            </DropdownMenuItem>*/}
            {/*            <DropdownMenuItem>*/}
            {/*                Billing*/}
            {/*                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
            {/*            </DropdownMenuItem>*/}
            {/*            <DropdownMenuItem>*/}
            {/*                Settings*/}
            {/*                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>*/}
            {/*            </DropdownMenuItem>*/}
            {/*            <DropdownMenuItem>New Team</DropdownMenuItem>*/}
            {/*        </DropdownMenuGroup>*/}
            {/*        <DropdownMenuSeparator/>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            Log out*/}
            {/*            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*    </DropdownMenuContent>*/}
            {/*</DropdownMenu>*/}
        </div>
    );
};

export default UserNav;