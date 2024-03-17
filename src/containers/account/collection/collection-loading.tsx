import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import React from 'react'

export default function CollectionLoading() {
    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <div>
                        <Skeleton className="h-3 w-[250px]" />
                        <Skeleton className="h-2 w-[200px] mt-3" />
                    </div>
                    <Skeleton className='h-[35px] w-[100px]' />
                </div>
                <Separator className='my-6' />
            </div>
            <div className='grid grid-cols-7 gap-3'>
                {Array.from({ length: 10 }).map((item, index) => (
                    <Skeleton key={index} className="h-32" />
                ))}
            </div>
        </div>
    )
}
