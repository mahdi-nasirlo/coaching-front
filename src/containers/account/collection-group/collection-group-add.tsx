"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { collectionConstance } from "@/constants/collection";
import { useCreateCollectionGroup } from "hooks/api/collection-group";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/ui/v2/dialog";
import { Button } from "@components/ui/v2/button";
import { Separator } from "@components/ui/v2/separator";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/ui/v2/form";
import { Input } from "@components/ui/v2/input";

const formSchema = collectionConstance.createCollectionGroup.type;

export default function CollectionGroupAdd() {
    const [open, setOpen] = useState(false);

    const { mutateAsync, isPending } = useCreateCollectionGroup();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = async (data: z.infer<typeof formSchema>, e: any) => {
        e.preventDefault();

        const res = await mutateAsync(data);

        if (res.success) {
            setOpen(false);
            form.reset();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen} modal={true}>
            <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
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
                        className="tw-space-y-2"
                    >
                        <FormField
                            control={form.control}
                            name="handle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>system name</FormLabel>
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
                        className="flex items-center"
                        disabled={isPending}
                        onClick={form.handleSubmit(handleSubmit)}
                        type="submit"
                    >
                        {isPending && (
                            <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" />
                        )}
                        submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
