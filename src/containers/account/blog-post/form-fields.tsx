import React from 'react';
import {UseFormReturn} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@ui/v2/form";
import {Input} from "@ui/v2/input";
import {Editor} from "@ui/v2/editor";

interface PropType {
    form: UseFormReturn<any>
}

const CreateForm = ({form}: PropType) => {

    return (
        <>
            <div className="tw-grid tw-grid-cols-6 tw-gap-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem
                            className="tw-col-span-3"
                        >
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="pleas inter value" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({field}) => (
                        <FormItem
                            className="tw-col-span-3"
                        >
                            <FormLabel>Path</FormLabel>
                            <FormControl>
                                <Input placeholder="pleas inter value" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    render={({field}) => (
                        <FormItem
                            className="tw-col-span-6"
                        >
                            <FormLabel>content</FormLabel>
                            <FormControl>
                                <Editor
                                    height={300}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                    name={"content"}
                />
            </div>
        </>
    );
};

export default CreateForm;