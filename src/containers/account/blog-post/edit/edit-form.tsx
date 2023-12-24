import React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {blogApiUrl} from "../../../../constants/blogApiUrl";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@ui/v2/button";
import {Form} from "@ui/v2/form";
import {useCreateBlogPost} from "../../../../hooks/api/posts";
import {Card, CardContent, CardDescription, CardTitle} from "@ui/v2/card";
import {Separator} from "@ui/v2/separator";
import FormFields from "@containers/account/blog-post/form-fields";

const apiData = blogApiUrl.post.admin.create

const EditForm = ({name}: { name?: string }) => {

    const createPost = useCreateBlogPost()

    const form = useForm<z.infer<typeof apiData.type>>({
        resolver: zodResolver(apiData.type),
    })


    async function onSubmit(values: z.infer<typeof apiData.type>) {
        console.log(values)
        // @ts-ignore
        await createPost.mutateAsync(values)
    }

    return (
        <>
            <CardTitle>
                Edit Post
                <CardDescription className="tw-mt-2">
                    {name}
                </CardDescription>
            </CardTitle>
            <Separator className="tw-mb-6"/>
            <Card>
                <CardContent className="tw-pt-6">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-5">
                            <FormFields form={form}/>
                            <Button className="tw-mt-3" size="sm" type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default EditForm;