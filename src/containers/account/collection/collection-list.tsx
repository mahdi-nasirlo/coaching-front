"use client";

import NavigateItem from "@components/account/navigate-item";
import {
    useGetAllCollectionWithChild,
    useGetBreadcrumbCollection,
} from "hooks/api/collection-group";
import Empty from "@components/ui/v2/empty";
import { Card } from "@components/ui/v2/card";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

export default function CollectionList({
    collectionGroupID,
    collectionID,
}: {
    collectionID?: number;
    collectionGroupID: number;
}) {
    const { data } = useGetAllCollectionWithChild({
        collection_group_id: collectionGroupID,
        collection_id: collectionID,
    });

    // const { data: breadcrumb } = useGetBreadcrumbCollection(collectionID);

    return (
        <div>
            {(!Array.isArray(data) || data.length == 0) && (
                <Card className="tw-flex tw-items-center tw-justify-center tw-p-9">
                    <Empty className="tw-mx-auto tw-w-28 tw-h-28" />
                </Card>
            )}
            <div className="tw-grid tw-grid-cols-7 tw-gap-3">
                {data?.map((folder, index) => (
                    <Link
                        href={`/account/collection/${folder.id}/${collectionGroupID}`}
                    >
                        <Card
                            key={index}
                            className={cx(
                                "hover:tw-scale-105 tw-transition-all tw-duration-300 tw-py-3 tw-h-32 tw-flex tw-flex-col tw-justify-center tw-items-center tw-cursor-pointer tw-bg-gray-50 hover:tw-border-2 hover:tw-border-primary"
                            )}
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
        </div>
    );
}
