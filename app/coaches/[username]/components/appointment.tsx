"use client"

import React, {useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar, DayValue} from "react-modern-calendar-datepicker";
import moment from "jalali-moment";
import {Alert, Divider, Spin} from "antd";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import {getFetcher} from "@/lib/getFetcher";
import Times from "@/app/coaches/[username]/components/times";
import useForm from "antd/lib/form/hooks/useForm";

function Appointment({uuid}: {
    uuid: string
}) {

    const [form] = useForm()

    const [selectedDay, setSelectedDay] = useState<DayValue>(null);

    const {isLoading, data} = useSWR(`/meeting/coach/${uuid}/getAppointmentDay`, getFetcher)

    const {
        isMutating,
        data: times,
        trigger
    } = useSWRMutation<{
        data: Times[]
    }>(`/meeting/coach/${uuid}/getAppointmentDayTime`, getFetcher)


    const minimumDate = {
        year: moment().jYear(),
        month: moment().jMonth() + 1, // Months are zero-based, so we add 1
        day: moment().jDate()
    };

    const handleSelectDay = async (day: DayValue) => {

        setSelectedDay(day)

        // @ts-ignore
        const date = moment(`${day.year}-${day.month}-${day.day}`, "YYYY-M-D").format("YYYY-MM-DD")

        // @ts-ignore
        await trigger([{key: "date", value: date}])

    }


    return (
        <Spin spinning={isLoading}>
            <div id={"custom-calender"}>
                <Calendar
                    value={selectedDay}
                    onChange={handleSelectDay}
                    customDaysClassName={data?.data}
                    minimumDate={minimumDate}
                    calendarClassName="w-full"
                    locale="fa"
                    shouldHighlightWeekends
                />

                {times && <Divider className="mt-0"/>}
                <Spin spinning={isMutating}>
                    {!selectedDay && <Alert data-aos="fade-up" className="mb-4" type={"warning"}
                                            message={"لطفا یک روز را انتخاب کنید"}/>}
                    <Times form={form} times={times?.data}/>
                </Spin>
                <div className="lp-course-buttons mt-8">
                    <button
                        onClick={() => form.submit()}
                        className="btn btn-primary btn-hover-secondary btn-width-100">
                        ثبت نام
                    </button>
                </div>
            </div>
        </Spin>
    );
}

export default Appointment;