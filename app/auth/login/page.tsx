"use client"

import Image from "next/image";
import {Button, Col, Form, Input, Row} from "antd";
import {loginInterface, loginRequest} from "@/services/auth/login";
import useForm from "antd/lib/form/hooks/useForm";
import {useState} from "react";
import ThemeProvider from "@/providers/theme-provider";


type Status = { status: "success" | "error" | "warning" | "validating" | undefined, msg: string }

export default function Login() {

    const [accountValidate, setAccountValidate] = useState<Status>({status: undefined, msg: ""})

    const [form] = useForm()
    const handleSubmit = (values: loginInterface) => {

        const res = loginRequest(values)
            .catch((error) => {
                setAccountValidate({status: "error", msg: error.response.data.message})
            })

    }

    return <>
        <ThemeProvider>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image src="/statics/mark.svg" alt="logo" width="80" height="80" className="w-15 h-15 mr-2"/>
                    </a>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                ورود به حساب کاربری
                            </h1>
                            <Form
                                form={form}
                                onFinish={handleSubmit}
                                className="space-y-4 md:space-y-6"
                                requiredMark="optional"
                                name="form_item_path"
                                layout="vertical"
                            >
                                <Row gutter={[32, 12]}>
                                    <Col span={24}>
                                        <Form.Item
                                            name="email"
                                            label="ایمیل"
                                            rules={[
                                                {required: true, message: "لطفا فیلد را وارد نمایید"},
                                                {type: "string"},
                                            ]}
                                            validateStatus={accountValidate.status}
                                            help={accountValidate.msg}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="email@example.com"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item
                                            name="password"
                                            label="گذرواژه"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "لطفا فیلد را وارد نمایید",
                                                },
                                                {type: "string"},
                                            ]}
                                        >
                                            <Input size="large" placeholder={"وارد نمایید"}/>
                                        </Form.Item>
                                    </Col>
                                    <Col className="mt-2" span={24}>
                                        <Button size="large" className="w-full" htmlType="submit" type="primary">
                                            ورود
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    </>
}
