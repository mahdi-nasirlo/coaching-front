import React, {useState} from 'react';
import {Times} from "@/Types/app/coach";
import {Alert, Form, Radio} from "antd";
import {FormInstance} from "antd/lib";
import PaymentSteps from "@/app/coaches/[username]/components/paymentSteps";

function Times({times, form}: {
    times: Times[] | undefined,
    form: FormInstance<any>
}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (times?.length !== undefined && times.length == 0) {
        return <Alert data-aos="fade-up" className="mb-4" type="warning"
                      message="زمان برای این تاریخ ساعت رزرو یافت نشد"/>
    }

    if (times === undefined) {
        return <></>
    }

    const onFinish = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    data-aos="fade-up"
                    // rules={[{required: true}]}
                    className="times-list"
                    name="meeting"
                    // label="ساعات جلسه"
                >
                    {times?.map((time, index) =>
                        <Radio data-aos="fade-up" key={index}>{time.time}</Radio>
                    )}
                </Form.Item>

            </Form>


            <PaymentSteps isModalOpen={isModalOpen} setIsModalOpen={(value) => setIsModalOpen(value)}/>

        </>
    );
}

export default Times;