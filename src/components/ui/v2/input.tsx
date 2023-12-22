import * as React from "react"

import {cn} from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "tw-flex tw-bg-gray-50 tw-border border-gray-300 text-gray-900 text-sm rounded-lg focus:tw-ring-primary focus-visible:tw-ring-1 focus-visible:tw-ring-ring focus:tw-border-primary block w-full  tw-h-10 tw-w-full tw-rounded-md tw-border-input tw-px-3 tw-py-2 tw-text-sm tw-file:border-0 tw-file:bg-transparent tw-file:text-sm tw-file:font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
