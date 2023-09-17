'use client'

import useSWR from "swr";
import {getFetcher} from "@/lib/getFetcher";
import Loading from "@/app/coaches/all/loading";
import CoachList from "@/app/coaches/all/components/coach-list";
import Link from "next/link";

export default function Page() {

    const {data: coaches, isLoading, error} = useSWR("/coach", getFetcher)

    return (
        <>
            {isLoading && <Loading/>}
            
            {!isLoading && !error && <>
                <div className="row justify-content-between align-items-center max-mb-20" data-aos="fade-up">
                    <div className="col-sm-auto col-12 max-mb-10">
                        <p className="result-count">ما پیدا کردیم<span>22</span> دوره های موجود برای شما</p>
                    </div>
                    <div className="col-sm-auto col-12 max-mb-10">
                        {/*<select className="sort-by">*/}
                        {/*    <option >پشفرض</option>*/}
                        {/*    <option value="popularity">محبوبیت</option>*/}
                        {/*    <option value="date">اخیر</option>*/}
                        {/*    <option value="price">قیمت از پایین به بالا</option>*/}
                        {/*    <option value="price-desc">قیمت از بالا به پایین</option>*/}
                        {/*</select>*/}
                    </div>
                </div>

                <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">

                    <CoachList items={coaches.data}/>

                </div>

                <div className="row max-mt-50">
                    <div className="col text-center">
                        <Link href="JavaScript:Void(0);" className="btn btn-outline-primary load-more-btn">مطالعه
                            بیشتر <i className="fal fa-redo ml-3"></i></Link>
                    </div>
                </div>
            </>}
        </>
    )
}


