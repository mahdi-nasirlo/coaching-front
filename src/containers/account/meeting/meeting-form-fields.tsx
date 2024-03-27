"use client";

import { UseFormReturn, useFieldArray } from "react-hook-form";
import CollectionCoachSelectField from "@components/fields/admin/collection-coach-select-field";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/v2/card";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/ui/v2/form";
import React from "react";
import { Editor } from "@components/ui/v2/editor";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@components/ui/v2/tabs";
import { Input } from "@components/ui/v2/input";
import { Button, buttonVariants } from "@components/ui/v2/button";
import { Textarea } from "@components/ui/v2/textarea";
import { ProfileInput } from "@components/ui/profile-input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/v2/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Empty from "@components/ui/v2/empty";
import { cn } from "@/lib/utils";
import { coachApiUrl } from "@/constants/coach";
import { z } from "zod";

const formSchema = coachApiUrl.adminUpdate.type.request;

export default function MeetingFormFileds({
    form,
}: {
    form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
    return (
        <div className="tw-space-y-8">
            <ProfileInfo form={form} />
            <CollectionControll form={form} />
            <BasicInfo form={form} />
        </div>
    );
}

const BasicInfo = ({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) => {

    const {
        formState: {
            errors: { education_record, job_experience, resume },
        },
    } = form;

    return (
        <Tabs defaultValue="resume" className="tw-col-span-full">
            <div className="tw-flex tw-justify-between tw-items-center">
                <div>
                    <div className="tw-text-secondary tw-col-span-full tw-text-lg tw-font-bold">
                        Basic Info
                    </div>
                    <span className="tw-text-destructive tw-text-sm">
                        {job_experience && <div>
                            job_experience: {job_experience?.message}
                        </div>}
                        {education_record && <div>
                            education_record: {education_record?.message}
                        </div>}
                        {resume && <div>
                            resume: {resume?.message}
                        </div>}
                    </span>
                </div>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="resume">Resume</TabsTrigger>
                    <TabsTrigger value="job_experience">
                        Job Experience
                    </TabsTrigger>
                    <TabsTrigger value="education_record">
                        Education Record
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="resume">
                <Card>
                    <CardHeader>
                        <CardTitle className="tw-text-primary">
                            Resume
                        </CardTitle>
                        <CardDescription>
                            Please share your resume here. Make sure to include
                            details of your work experience, education, skills,
                            and any other relevant information that could help
                            us better understand your background and
                            qualifications.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FormField
                            name="resume"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="tw-col-span-12">
                                    <FormLabel>resume</FormLabel>
                                    <FormControl>
                                        <Editor
                                            simple={true}
                                            height={180}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="job_experience">
                <Card>
                    <CardHeader>
                        <CardTitle className="tw-text-primary">
                            Job Experience
                        </CardTitle>
                        <CardDescription>
                            Please provide details of your relevant work
                            experience, including job titles, company names,
                            dates of employment, key responsibilities,
                            achievements, and any other significant details that
                            showcase your professional background.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FormField
                            name="job_experience"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="tw-col-span-12">
                                    <FormLabel>job experience</FormLabel>
                                    <FormControl>
                                        <Editor
                                            simple={true}
                                            height={180}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="education_record">
                <Card>
                    <CardHeader>
                        <CardTitle className="tw-text-primary">
                            education record
                        </CardTitle>
                        <CardDescription>
                            Please list your educational background, including
                            degrees obtained, institutions attended, dates of
                            study, majors/minors, GPA, academic honors, and any
                            other pertinent details that highlight your
                            educational achievements and qualifications.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FormField
                            name="education_record"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="tw-col-span-12">
                                    <FormLabel>education record</FormLabel>
                                    <FormControl>
                                        <Editor
                                            simple={true}
                                            height={180}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

const ProfileInfo = ({
    form,
}: {
    form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
    const {
        formState: {
            errors: { profile_image },
        },
    } = form;
    return (
        <div>
            <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-items-start tw-flex-col tw-mb-2 ">
                    <div className="tw-text-secondary tw-col-span-full tw-text-lg tw-font-bold">
                        Profile
                    </div>
                    <span className="tw-text-destructive tw-text-sm">
                        {profile_image?.message}
                    </span>
                </div>
            </div>
            <Card>
                <div className="tw-h-44 tw-relative tw-bg-gradient-to-r tw-from-sky-500 tw-to-indigo-500 tw-rounded-t-lg">
                    <FormField
                        name="profile_image"
                        control={form.control}
                        render={({ field }) => (
                            <ProfileInput
                                {...field}
                                error={
                                    typeof form.formState.errors.profile_image
                                        ?.message == "string"
                                }
                                className="tw-h-28 tw-w-28 tw-absolute tw-bottom-[-50px] tw-outline tw-border-none tw-outline-white tw-outline-2 tw-left-5 tw-outline-none tw-rounded-full"
                            />
                        )}
                    />
                </div>
                <CardContent className="tw-mt-14 tw-grid tw-grid-cols-6 tw-gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="tw-col-span-3">
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="phone_number"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="tw-col-span-3">
                                <FormLabel>phon number</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="about_me"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="tw-col-span-6">
                                <FormLabel>about me</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription>
                                    Introduce yourself briefly. Tell us about
                                    your key achievements, interests, and
                                    passions.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

const CollectionControll = ({
    form,
}: {
    form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
    const { append, fields, remove } = useFieldArray({
        control: form.control,
        name: "prices",
    });

    console.log(fields);


    return (
        <>
            <div>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <div className="tw-flex tw-items-center tw-flex-col tw-mb-2 ">
                        <div className="tw-text-secondary tw-col-span-full tw-text-lg tw-font-bold">
                            Coach Collection & Pricing
                        </div>
                        <span className="tw-text-destructive tw-text-sm">
                            {form.formState.errors.profile_image?.message}
                        </span>
                    </div>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="tw-mb-2"
                        type="button"
                        onClick={() =>
                            append({
                                collection_id: "please choose collection.",
                                price: 100,
                            })
                        }
                    >
                        add collection
                    </Button>
                </div>
                <Card>
                    <CardContent className="tw-mt-4">
                        <div className="col-span-full space-y-3">
                            {fields.map((field: any, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="tw-w-full aragment tw-justify-between tw-py-1"
                                    >
                                        <div className="tw-grid tw-gap-2 tw-grid-cols-6 tw-w-full">
                                            <FormField
                                                control={form.control}
                                                key={field.id}
                                                name={`prices.${index}.collection_id`}
                                                render={({ field }) => (
                                                    <FormItem className="tw-col-span-3">
                                                        <FormLabel
                                                            className={cn(
                                                                index !== 0 &&
                                                                "sr-only"
                                                            )}
                                                        >
                                                            Collection
                                                        </FormLabel>
                                                        <FormDescription
                                                            className={cn(
                                                                index !== 0 &&
                                                                "sr-only"
                                                            )}
                                                        >
                                                            Please input the
                                                            price of each
                                                            meeting.
                                                        </FormDescription>
                                                        <FormControl>
                                                            <CollectionCoachSelectField
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                key={field.id}
                                                name={`prices.${index}.price`}
                                                render={({ field }) => (
                                                    <FormItem className="tw-col-span-3">
                                                        <FormLabel
                                                            className={cn(
                                                                index !== 0 &&
                                                                "sr-only"
                                                            )}
                                                        >
                                                            Price
                                                        </FormLabel>
                                                        <FormDescription
                                                            className={cn(
                                                                index !== 0 &&
                                                                "sr-only"
                                                            )}
                                                        >
                                                            Please input the
                                                            price of each
                                                            meeting.
                                                        </FormDescription>
                                                        <FormControl>
                                                            <Input type="number" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger
                                                className={cn(
                                                    index == 0 && "tw-mt-14"
                                                )}
                                            >
                                                <div
                                                    className={cn(buttonVariants({ variant: "link" }))}
                                                // variant="link"
                                                // size="sm"
                                                >
                                                    <DotsVerticalIcon />
                                                </div>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="min-w-40">
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        remove(index)
                                                    }
                                                    className="text-red-600 font-semibold cursor-pointer"
                                                >
                                                    delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <span className="text-destructive font-medium text-sm mt-1">
                                        {
                                            form.formState.errors.prices?.[
                                                index
                                            ]?.message
                                        }
                                    </span>
                                </>
                            ))}
                            {fields.length == 0 && (
                                <Empty className="tw-mx-auto tw-w-28 tw-h-28 tw-my-6" />
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
