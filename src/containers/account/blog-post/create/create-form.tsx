import React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {blogApiUrl} from "../../../../constants/blogApiUrl";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@ui/v2/button";
import {Form} from "@ui/v2/form";
import {useCreateBlogPost} from "../../../../hooks/api/posts";
import {Card, CardContent} from "@ui/v2/card";
import {resetForm} from "@utils/methods";
import FormFields from "@containers/account/blog-post/form-fields";

const apiData = blogApiUrl.post.admin.create

const CreateForm = () => {

    const createPost = useCreateBlogPost()

    const form = useForm<z.infer<typeof apiData.type>>({
        resolver: zodResolver(apiData.type),
    })


    async function onSubmit(values: z.infer<typeof apiData.type>) {

        const res = await createPost.mutateAsync(values)

        if (res?.status)
            resetForm(apiData.type, form)

    }

    return (
        <>
            <Card>
                <CardContent className="tw-pt-6">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="tw-space-y-5">
                            <FormFields form={form}/>
                            <Button className="tw-mt-3 tw-bg-secondary" size="sm" type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};

export default CreateForm;