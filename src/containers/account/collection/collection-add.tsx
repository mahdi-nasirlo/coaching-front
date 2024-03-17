"use client";

import React, { useState } from "react";
import { Button } from "@ui/v2/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@ui/v2/dialog";
import { Input } from "@ui/v2/input";
import { Separator } from "@ui/v2/separator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ui/v2/form";
import { Loader2 } from "lucide-react";
import { collectionConstance } from "@/constants/collection";
import { useCreateCollection } from "hooks/api/collection-group";

const formSchema = collectionConstance.createCollection.type.form;

export default function CollectionAdd({
    collectionGroupID,
    collectionID,
}: {
    collectionID?: number;
    collectionGroupID: number;
}) {
    const [open, setOpen] = useState(false);

    const { mutateAsync, isPending } = useCreateCollection();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = async (data: z.infer<typeof formSchema>, e: any) => {
        e.preventDefault();

        const res = await mutateAsync({
            collection_group_id: collectionGroupID,
            parent_id: collectionID,
            ...data,
        });

        if (res.success) {
            setOpen(false);
            form.reset();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} modal={true}>
            <DialogTrigger asChild>
                <Button size="sm" variant="secondary">
                    create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Collection</DialogTitle>
                    <Separator />
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="tw-space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="fa.name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>title (fa)</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            placeholder="product ..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="en.name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>title (en)</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPending}
                                            placeholder="product ..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="tw-flex tw-items-center"
                        disabled={isPending}
                        onClick={form.handleSubmit(handleSubmit)}
                        type="submit"
                    >
                        {isPending && (
                            <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" />
                        )}
                        create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
