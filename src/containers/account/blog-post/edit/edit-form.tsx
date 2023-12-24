"use client"

import React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {blogApiUrl} from "../../../../constants/blogApiUrl";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@ui/v2/button";
import {Form} from "@ui/v2/form";
import {useCreateBlogPost} from "../../../../hooks/api/posts";
import {Card, CardContent} from "@ui/v2/card";
import FormFields from "@containers/account/blog-post/form-fields";
import NavigateItem from "@components/account/navigate-item";

const apiData = blogApiUrl.post.admin
const apiDataCreate = apiData.create


const EditForm = ({name}: { name: string }) => {

    const createPost = useCreateBlogPost()

    const form = useForm<z.infer<typeof apiDataCreate.type>>({
        resolver: zodResolver(apiDataCreate.type),
    })


    async function onSubmit(values: z.infer<typeof apiDataCreate.type>) {
        console.log(values)
        // @ts-ignore
        await createPost.mutateAsync(values)
    }

    return (
        <>
            <NavigateItem
                title="Edit Blog Post"
                description={{
                    currentPage: name,
                    pages: [{path: apiData.getPage.pageName, label: apiData.getPage.pageName}],
                    showTitle: false
                }}
                action={<>
                    <Button variant="link" className="tw-text-red-500" size="sm">delete</Button>
                </>}
            />
            <Card>
                <CardContent className="tw-pt-6">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-5">
                            <FormFields form={form}/>
                            <Button variant="secondary" size="sm" type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default EditForm;