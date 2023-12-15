import {SubmitHandler, useForm} from "react-hook-form";
import Input from "@ui/form-elements/input";
import Checkbox from "@ui/form-elements/checkbox";
import {hasKey} from "@utils/methods";
import {useLogin} from "../../hooks/api/useLogin";
import Router from "next/router";
import Button from "@ui/button";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";


interface IFormValues {
    email: string;
    password: string;
}

const LoginForm = () => {

    const searchParams = useSearchParams()

    const login = useLogin()

    const session = useSession()

    useEffect(() => {

        if (session.status === "authenticated") Router.push("/")

    }, [session.status])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {

        const res = await login.mutateAsync(data)

        console.log(res)

        if (res?.ok) {
            await Router.push(searchParams.get("callbackUrl") || res.url || "/")
        }

    };

    return (
        <div
            className="tw-bg-white tw-shadow-2xs tw-shadow-heading/10 tw-max-w-[470px] tw-pt-7.5 tw-pb-[50px] tw-px-[50px]">
            <h3 className="tw-text-h2 tw-mb-5">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="email"
                        className="tw-text-heading tw-text-md"
                    >
                        Email *
                    </label>
                    <Input
                        id="email"
                        placeholder="Email"
                        bg="light"
                        disabled={login.isPending}
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                            },
                        })}
                    />
                </div>
                <div className="tw-mb-7.5">
                    <label
                        htmlFor="password"
                        className="tw-text-heading tw-text-md"
                    >
                        Password *
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        bg="light"
                        disabled={login.isPending}
                        autoComplete="true"
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                </div>
                <Checkbox name="remember" id="remember" label="Remember me"/>
                <Button disabled={login.isPending} type="submit" fullwidth className="tw-mt-7.5">
                    Log In
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
