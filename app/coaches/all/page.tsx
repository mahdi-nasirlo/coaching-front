"use client"

import useSWR from "swr";
import {getAllCoaches} from "@/services/coach/all/getAllCoaches";
import CoachList from "@/app/coaches/all/components/coach-list";
import Loading from "@/app/coaches/all/loading";
import {Row} from "antd";

export default function Page() {

    const {data: coaches, isLoading, error} = useSWR("/coaches", getAllCoaches)

    return (
        <>
            <div aria-label="group of cards" className="focutabIndexe-none py-8 w-full">
                <div className="lg:flex items-center justify-start w-full">
                    <Row gutter={16}>
                        {isLoading ? [...Array(10)].map(() => <> <Loading/> </>) : <CoachList items={coaches.data}/>}
                    </Row>
                </div>
            </div>
        </>
    )
}

