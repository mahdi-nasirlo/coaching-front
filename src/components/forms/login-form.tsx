import {SubmitHandler, useForm} from "react-hook-form";
import Input from "@ui/form-elements/input";
import Checkbox from "@ui/form-elements/checkbox";
import Button from "@ui/button";
import {hasKey} from "@utils/methods";
import toast from "react-hot-toast";
import {getTokenWithEmail} from "../../lib/api/auth";

interface IFormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    // const router = useRouter();
    // const [serverState, setServerState] = useState("");
    // const {setLogin} = useUser();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {

        const res = getTokenWithEmail({
            data:
                {
                    email: `${data?.email}`,
                    password: `${data?.password}`,
                },
        })


        await toast.promise(res, {
            loading: 'Loading',
            success: (data) => `Successfully saved ${data.name}`,
            error: (err) => `This just happened: ${err.toString()}`,
        })
        // const res = await signIn("credentials", {email: data.email, password: data.password, redirect: false})

        // toast.promise(res,{error})

        // if (data.email === "Admin" && data.password === "Admin") {
        //     setLogin();
        //     setServerState("");
        //     if (window?.history?.length > 2) {
        //         router.back();
        //     }
        // } else {
        //     setServerState("Email or password is incorrect");
        // }
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
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    {/*<small>Default Email: Admin</small>*/}
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
                        autoComplete="true"
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    <small>Default Password: Admin</small>
                </div>
                <Checkbox name="remember" id="remember" label="Remember me" />
                <Button type="submit" fullwidth className="tw-mt-7.5">
                    Log In
                </Button>
                {/*{serverState && <FeedbackText>{serverState}</FeedbackText>}*/}
            </form>
        </div>
    );
};

export default LoginForm;
