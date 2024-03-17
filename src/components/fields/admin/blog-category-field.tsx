import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@ui/v2/select";
import { SelectProps } from "@radix-ui/react-select";
import { useGetAllBlogCategory } from "../../../hooks/api/blog-category";

const BlogCategoryField = React.forwardRef<HTMLInputElement, SelectProps>(
    ({ ...props }) => {
        const { data, isLoading } = useGetAllBlogCategory();

        return (
            <div>
                <Select
                    value={props.value}
                    defaultValue={props.value}
                    onValueChange={props.onValueChange}
                >
                    <SelectTrigger loading={isLoading} className="w-[280px]">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        {/* {data?.map(((category, index: number) => <SelectItem key={index}
                                                                             value={`${category.id}`}>{category.name}</SelectItem>))} */}
                    </SelectContent>
                </Select>
            </div>
        );
    }
);

export { BlogCategoryField };
