import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/ui/v2/select";
import { useGetAllCollection } from "hooks/api/collection-group";
import React from "react";
import { ControllerRenderProps } from "react-hook-form";

export default function CollectionCoachSelectField(
    props: ControllerRenderProps
) {
    const { data } = useGetAllCollection({ collection_group_id: "1" });

    return (
        <Select value={props.value} onValueChange={props.onChange}>
            <SelectTrigger>
                <SelectValue placeholder="choose collection" />
            </SelectTrigger>
            <SelectContent>
                {data?.map((item, index) => (
                    <SelectItem key={index} value={`${item.id}`}>
                        {item.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
