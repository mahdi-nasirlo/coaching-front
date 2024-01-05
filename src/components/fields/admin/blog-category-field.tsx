import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@ui/v2/select";
import {SelectProps} from "@radix-ui/react-select";

const BlogCategoryField = React.forwardRef<HTMLInputElement, SelectProps>(
    ({...props}) => {
        return (
            <div>
                <Select value={props.value} defaultValue={props.value} onValueChange={props.onValueChange}>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a timezone"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>North America</SelectLabel>
                            <SelectItem value={"1"}>Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value={"2"}>Central Standard Time (CST)</SelectItem>
                            {/*<SelectItem value={3}>Mountain Standard Time (MST)</SelectItem>*/}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        )
    }
)


export {BlogCategoryField};