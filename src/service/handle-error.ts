import {signOut} from "next-auth/react";
import toast from "react-hot-toast";

const handleError = async () => {
    toast.error("توکن شما منقضی شده لطفا دوباره وارد شوید.", {duration: 5000})
    await signOut()
};

export default handleError;