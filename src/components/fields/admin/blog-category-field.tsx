import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@ui/v2/select";
import {SelectProps} from "@radix-ui/react-select";
import {useGetAllBlogCategory} from "../../../hooks/api/blog-category";

const BlogCategoryField = React.forwardRef<HTMLInputElement, SelectProps>(
    ({...props}) => {

        const {data} = useGetAllBlogCategory()

        return (
            <div>
                <Select value={props.value} defaultValue={props.value} onValueChange={props.onValueChange}>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a timezone"/>
                    </SelectTrigger>
                    <SelectContent>
                        {/*<SelectGroup>*/}
                        {/*    <SelectLabel>North America</SelectLabel>*/}
                        {data?.map(((category: any, index: number) => <SelectItem key={index} value={"1"}>Eastern
                            Standard Time
                            (EST)</SelectItem>))}

                        {/*<SelectItem value={3}>Mountain Standard Time (MST)</SelectItem>*/}
                        {/*</SelectGroup>*/}
                    </SelectContent>
                </Select>
            </div>
        )
    }
)


export {BlogCategoryField};