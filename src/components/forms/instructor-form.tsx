import clsx from "clsx";
import {useForm} from "react-hook-form";
import Button from "@ui/button";
import Input from "@ui/form-elements/input";
import Textarea from "@ui/form-elements/textarea";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@components/ui/v2/form";
import {coachApiUrl} from "@/constants/coach";
import Alert from "@ui/alert";
import Anchor from "@ui/anchor";
import {useSession} from "next-auth/react";
import {useRegisterCoach} from "../../hooks/api/coach";
import {resetForm} from "@utils/methods";

type TProps = {
    className?: string;
};

const apiData = coachApiUrl.register;

const InstructorForm = ({className}: TProps) => {

    const session = useSession()

    const register = useRegisterCoach()

    const form = useForm<z.infer<typeof apiData.type>>({
        resolver: zodResolver(apiData.type),
    });

    const onSubmit = async (data: z.infer<typeof apiData.type>) => {

        const res = await register.mutateAsync(data)

        if (res?.status) {
            resetForm(apiData.type, form)
        }
        
    };


    return (
        <div
            className={clsx(
                "tw-bg-white tw-rounded tw-py-7.5 tw-px-3.8 sm:tw-pt-14 sm:tw-pb-15 sm:tw-px-[50px] tw-shadow-2md tw-shadow-black/10",
                className
            )}
        >
            <h4 className="tw-text-[28px] tw-mb-5 sm:tw-text-[34px] sm:tw-mb-9 tw-leading-snug tw-text-center">
                Register to become an Intructor
            </h4>
            {session.status === "unauthenticated" && <Alert color="secondary" className="tw-mb-5">
                <i className="far fa-exclamation-circle"/>
                Please <Anchor path="/login-register">login</Anchor> to send
                your request!
            </Alert>}
            <Form {...form} >
                <form
                    className="become-teacher-form"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="tw-grid md:tw-grid-cols-2 md:tw-gap-3 md:tw-gap-y-0">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({field}) => (
                                <FormItem className="tw-mb-3.8">
                                    <label
                                        htmlFor="name"
                                        className="tw-sr-only"
                                    >
                                        Name
                                    </label>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="Your Name *"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="phone_number"
                            control={form.control}
                            render={({field}) => (
                                <FormItem className="tw-mb-3.8">
                                    <label
                                        htmlFor="phone"
                                        className="tw-sr-only"
                                    >
                                        Phone
                                    </label>
                                    <FormControl>
                                        <Input
                                            id="phone"
                                            placeholder="Your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="about_me"
                            control={form.control}
                            render={({field}) => (
                                <FormItem className="tw-mb-5 tw-col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="tw-sr-only"
                                    >
                                        About Me
                                    </label>
                                    <FormControl>
                                        <Textarea
                                            id="message"
                                            placeholder="Your About Me"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="tw-text-center">
                        <Button className="tw-w-full" type="submit">Get the learning program</Button>
                    </div>
                </form>
            </Form>
            {/* <form
                className="become-teacher-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="tw-grid md:tw-grid-cols-2 md:tw-gap-7.5">
                    <div className="tw-mb-3.8">
                        <label htmlFor="name" className="tw-sr-only">
                            Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Your Name *"
                            feedbackText={errors?.name?.message}
                            state={hasKey(errors, "name") ? "error" : "success"}
                            showState={!!hasKey(errors, "name")}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                    </div>
                    <div className="tw-mb-3.8">
                        <label htmlFor="email" className="tw-sr-only">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email *"
                            feedbackText={errors?.email?.message}
                            state={
                                hasKey(errors, "email") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "email")}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="tw-mb-3.8">
                    <label htmlFor="phone" className="tw-sr-only">
                        Phone
                    </label>
                    <Input
                        id="phone"
                        placeholder="Your phone number"
                        feedbackText={errors?.phone?.message}
                        state={hasKey(errors, "phone") ? "error" : "success"}
                        showState={!!hasKey(errors, "phone")}
                        {...register("phone", {
                            required: "Phone is required",
                        })}
                    />
                </div>
                <div className="tw-mb-5">
                    <label htmlFor="message" className="tw-sr-only">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Your Message"
                        feedbackText={errors?.message?.message}
                        state={hasKey(errors, "message") ? "error" : "success"}
                        showState={!!hasKey(errors, "message")}
                        {...register("message", {
                            required: "Message is required",
                        })}
                    />
                </div>

                <div className="tw-text-center">
                    <Button type="submit">Get the learning program</Button>
                </div>
            </form> */}
        </div>
    );
};

export default InstructorForm;
