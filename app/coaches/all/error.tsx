"use client"

import React from 'react';
import {Button, Result} from "antd";
import {useRouter} from "next/navigation";

function Error() {

    const router = useRouter()

    return (
        <>
            <Result
                status="500"
                title="500"
                subTitle="خطایی رخ داده لطفا دوباره تلاش کنید."
                extra={<Button onClick={() => {
                    router.push("/")
                }} type="primary">برگشت</Button>}
            />
        </>
    );
}

export default Error;