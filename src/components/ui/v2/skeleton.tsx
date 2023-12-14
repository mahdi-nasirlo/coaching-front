import {cn} from "@/lib/utils"

function Skeleton({
                      className,
                      ...props
                  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("tw-animate-pulse tw-bg-muted", className)}
            {...props}
        />
    )
}

export {Skeleton}
