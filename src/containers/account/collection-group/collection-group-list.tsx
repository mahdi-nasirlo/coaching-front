"use client";

import { Card } from "@components/ui/v2/card";
import Empty from "@components/ui/v2/empty";
import { cx } from "class-variance-authority";
import { useGetAllCollectionGroup } from "hooks/api/collection-group";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CollectionGroupList() {
    const { data } = useGetAllCollectionGroup();

    return (
        <>
            {(!Array.isArray(data) || data.length == 0) && (
                <Card className="tw-flex tw-items-center tw-justify-center tw-p-9">
                    <Empty className="tw-mx-auto tw-w-28 tw-h-28" />
                </Card>
            )}
            <div className="tw-grid tw-grid-cols-7 tw-gap-3">
                {data?.map((folder, index) => (
                    <Link
                        key={index}
                        // className="tw-mt-2 tw-text-sm"
                        href={`/account/collection-group/${folder.id}`}
                    >
                        <Card
                            className={cx(
                                "tw-shadow-sm hover:tw-shadow-md hover:tw-scale-105 tw-transition-all tw-duration-400 tw-py-3 tw-h-32 tw-flex tw-flex-col tw-justify-center tw-items-center tw-cursor-pointer tw-bg-gray-50 tw-rounded-lg tw-bg-opacity-90 tw-border-opacity-70 hover:tw-border-2 hover:tw-border-opacity-55 hover:tw-border-primary"
                            )}
                            key={index}
                        >
                            <Image
                                src="/images/icons/folder-icon.png"
                                alt="folder icon"
                                width={50}
                                height={50}
                            />
                            <span className="tw-mt-2 tw-text-md">
                                {folder.name}
                            </span>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
}
