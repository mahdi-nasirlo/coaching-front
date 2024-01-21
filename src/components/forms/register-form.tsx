import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@ui/form-elements/input";
import Button from "@ui/button";
import { hasKey } from "@utils/methods";
import { authApiUrl } from "@/constants/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@components/ui/v2/form";
import { useRegister } from "hooks/api/useLogin";

interface IFormValues {
    email: string;
    reg_username: string;
    reg_password: string;
    confirmPassword: string;
}

const apiData = authApiUrl.register

const RegisterForm = () => {

    const register = useRegister()

    const form = useForm<z.infer<typeof apiData.schema>>({
        resolver: zodResolver(apiData.schema)
    })

    const onSubmit = async (data: z.infer<typeof apiData.schema>) => {

        console.log(data);

        await register.mutateAsync(data)
    };

    return (
        <div className="tw-px-[50px]">
            <h3 className="tw-text-h2 tw-mb-5">Register</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => <FormItem className="tw-mb-5">
                            <label
                                htmlFor="email"
                                className="tw-text-heading tw-text-md"
                            >
                                Email *
                            </label>
                            <FormControl>
                                <Input
                                    id="email"
                                    state={fieldState.error ? "error" : "success"}
                                    placeholder="email"
                                    bg="light"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => <FormItem className="tw-mb-5">
                            <label
                                htmlFor="reg_username"
                                className="tw-text-heading tw-text-md"
                            >
                                Username *
                            </label>
                            <FormControl>
                                <Input
                                    id="reg_username"
                                    placeholder="Username"
                                    bg="light"
                                    state={fieldState?.error ? "error" : "success"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => <FormItem className="tw-mb-5">
                            <label
                                htmlFor="password"
                                className="tw-text-heading tw-text-md"
                            >
                                Password *
                            </label>
                            <FormControl>
                                <Input
                                    id="password"
                                    placeholder="Password"
                                    bg="light"
                                    type="password"
                                    state={fieldState?.error ? "error" : "success"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <FormField
                        name="password_confirmation"
                        control={form.control}
                        render={({ field, fieldState }) => <FormItem className="tw-mb-5">
                            <label
                                htmlFor="password_confirmation"
                                className="tw-text-heading tw-text-md"
                            >
                                Confirm Password *
                            </label>
                            <FormControl>
                                <Input
                                    id="password_confirmation"
                                    placeholder="Password"
                                    bg="light"
                                    type="password"
                                    state={fieldState?.error ? "error" : "success"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />

                    <Button type="submit" fullwidth className="tw-mt-7.5">
                        Register
                    </Button>
                </form>
            </Form>
            {/* <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="email"
                        className="tw-text-heading tw-text-md"
                    >
                        Email *
                    </label>
                    <Input
                        id="email"
                        placeholder="email"
                        bg="light"
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
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
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="reg_username"
                        className="tw-text-heading tw-text-md"
                    >
                        Username *
                    </label>
                    <Input
                        id="reg_username"
                        placeholder="Username"
                        bg="light"
                        feedbackText={errors?.reg_username?.message}
                        state={
                            hasKey(errors, "reg_username") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "reg_username")}
                        {...register("reg_username", {
                            required: "Username is required",
                        })}
                    />
                </div>
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="reg_password"
                        className="tw-text-heading tw-text-md"
                    >
                        Password *
                    </label>
                    <Input
                        id="reg_password"
                        type="password"
                        placeholder="Password"
                        bg="light"
                        autoComplete="true"
                        feedbackText={errors?.reg_password?.message}
                        state={
                            hasKey(errors, "reg_password") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "reg_password")}
                        {...register("reg_password", {
                            required: "Password is required",
                        })}
                    />
                </div>
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="confirmPassword"
                        className="tw-text-heading tw-text-md"
                    >
                        Password *
                    </label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        bg="light"
                        autoComplete="true"
                        feedbackText={errors?.confirmPassword?.message}
                        state={
                            hasKey(errors, "confirmPassword")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "confirmPassword")}
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues("reg_password") ||
                                "The passwords do not match",
                        })}
                    />
                </div>

            
            </form> */}
        </div>
    );
};

export default RegisterForm;
