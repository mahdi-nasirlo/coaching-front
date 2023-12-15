import React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {blogApiUrl} from "../../../constants/blogApiUrl";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@ui/v2/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@ui/v2/form";
import {Input} from "@ui/v2/input";
import {useCreateBlogPost} from "../../../hooks/api/posts";

const apiData = blogApiUrl.post.admin.create

const CreateForm = () => {

    const createPost = useCreateBlogPost()

    const form = useForm<z.infer<typeof apiData.type>>({
        resolver: zodResolver(apiData.type),
    })


    async function onSubmit(values: z.infer<typeof apiData.type>) {
        console.log(values)
        await createPost.mutateAsync(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-5">
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
                    <Button className="tw-mt-3" size="sm" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateForm;