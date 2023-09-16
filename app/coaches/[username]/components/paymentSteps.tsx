import React, {useState} from 'react';
import {Button, Col, Descriptions, DescriptionsProps, Form, Input, Modal, Row, Select, Steps, theme} from "antd";
import useForm from "antd/lib/form/hooks/useForm";
import useSWRMutation from "swr/mutation";
import {getFetcher} from "@/lib/getFetcher";

const steps = [
    {
        title: 'تکمیل اطلاعات',
        content: 'First-content',
    },
    {
        title: 'تایید اطلاعات',
        content: 'Second-content',
    },
    {
        title: 'پرداخت',
        content: 'Last-content',
    },
];

function PaymentSteps({isModalOpen, setIsModalOpen}: {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void
}) {
    const [form] = useForm();

    const {token} = theme.useToken();

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items = steps.map((item) => ({key: item.title, title: item.title}));

    const contentStyle: React.CSSProperties = {
        padding: "20px",
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    const onFinish = (values: any) => {
        next()
    }


    const confirm: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'مربی',
            children: 'Zhou Maomao',
        },
        {
            key: '2',
            label: 'نوع جلسه',
            children: 'انلاین   ',
        },
        {
            key: '3',
            label: 'نوع کوچ',
            children: 'کوچ کسب و کار',
        },
        {
            key: '4',
            label: 'هزینه جلسه',
            children: '140,000',
        },
        {
            key: '5',
            label: 'تاریخ جلسه',
            children: '23 مهر 1402',
        },
    ];

    const {trigger, data, isMutating} = useSWRMutation("/meeting/reserve/1/pay?url=http://localhost:3000", getFetcher)

    const payment = async () => {

        const paymentData = await trigger()

        let actionUrl = paymentData?.data?.action

        if (actionUrl) {
            window.location = actionUrl
        }
        
    }

    return (
        <>
            {/* eslint-disable-next-line react/jsx-key */}
            <Modal className="max-w-4xl w-[95%]" footer={[<div style={{marginTop: 24}}>
                {current > 0 && (
                    <Button disabled={isMutating} style={{margin: '0 8px'}} onClick={() => prev()}>
                        لغو
                    </Button>
                )}
                {current == 0 && (
                    <Button type="primary" onClick={() => form.submit()}>
                        تایید
                    </Button>
                )}
                {current === 1 && (
                    <Button loading={isMutating} type="primary" onClick={payment}>
                        پرداخت
                    </Button>
                )}
            </div>]} title="رزور جلسه" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Steps className="mt-4" current={current} items={items}/>
                <div style={contentStyle}>
                    <div data-aos="fade-up" style={{display: current === 0 ? "block" : "none"}}>
                        <Form onFinish={onFinish} requiredMark={false} form={form} name="form_item_path"
                              layout="vertical">
                            <Row gutter={[12, 12]}>
                                <Col xs={24}>
                                    <Form.Item
                                        rules={[{required: true, message: "لطفا موضوع جلسه درخواستی را وارد کنید"}]}
                                        name="description"
                                        label="موضوع جلسه درخواستی"
                                    >
                                        <Input.TextArea maxLength={100} size="large" placeholder="وارد کنید"/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item
                                        rules={[{required: true, message: "لطفا نوع جلسه درخواستی را وارد کنید"}]}
                                        name="meeting-type" label="نوع جلسه">
                                        <Select
                                            options={[{label: "انلاین", value: "online"}, {label: "حضوری", value: "in_person"}]}
                                            size="large" placeholder="وارد کنید"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div data-aos="fade-up" style={{display: current === 1 ? "block" : "none"}}>
                        <Descriptions title="بازنگری اطلاعات" items={confirm}/>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default PaymentSteps;