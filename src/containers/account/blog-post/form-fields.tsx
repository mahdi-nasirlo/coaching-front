import React from 'react';
import {UseFormReturn} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@ui/v2/form";
import {Input} from "@ui/v2/input";

interface PropType {
    form: UseFormReturn<any>
}

const CreateForm = ({form}: PropType) => {

    return (
        <>
            <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                    <FormItem>
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
                    <FormItem>
                        <FormLabel>Path</FormLabel>
                        <FormControl>
                            <Input placeholder="pleas inter value" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </>
    );
};

export default CreateForm;