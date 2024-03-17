"use client";

import React from "react";
import CollectionAdd from "./collection-add";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v2/button";

export default function CollectionActions({
    collectionGroupID,
    collectionID,
}: {
    collectionID?: number;
    collectionGroupID: number;
}) {
    const router = useRouter();

    return (
        <div>
            <Button
                key={1}
                variant="ghost"
                className="ml-1"
                onClick={() => router.back()}
            >
                back
            </Button>
            <CollectionAdd
                key={2}
                collectionGroupID={collectionGroupID}
                collectionID={collectionID}
            />
        </div>
    );
}
