import { collectionConstance } from '@/constants/collection'
import React from 'react'
import { z } from 'zod'

const TProps = collectionConstance.getBreadcrumbCollection.response.shape.data

export default function CollectionBreadcrumb({ data }: { data: z.infer<typeof TProps> | undefined }) {
    return (
        <span>{data?.map((breadcrumb, index) => <span key={index}> / {breadcrumb}</span>)}</span>
    )
}
