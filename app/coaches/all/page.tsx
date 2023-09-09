"use client"

import useSWR from "swr";
import {getAllCoaches} from "@/services/coach/all/getAllCoaches";
import CoachList from "@/app/coaches/all/components/coach-list";
import Loading from "@/app/coaches/all/loading";
import {Button, Row, Select} from "antd";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Page() {

    const {data: coaches, isLoading, error} = useSWR("/coaches", getAllCoaches)

    return (
        <>
            {/*// <!-- Page Title Section Start -->*/}
            <div className="page-title-section section">
                <div className="page-title">
                    <div className="container">
                        <h1 className="title">لیست کوچ ها</h1>
                    </div>
                </div>
                <div className="page-breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><Link href="/index.html">صفحه اصلی</Link></li>
                            <li className="current">کوچ ها</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*// <!-- Page Title Section End -->*/}

            {/*// <!-- Course Section Start -->*/}
            <div className="section section-padding-bottom">
                <div className="container">

                    {/*// <!-- Course Top Bar Start -->*/}
                    <div className="row justify-content-between align-items-center max-mb-20">
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
                    {/*// <!-- Course Top Bar End -->*/}

                    {/*// <!-- Courses Wrapper Start -->*/}
                    <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">

                        {isLoading ? <div>loading .....</div>: <CoachList items={coaches} />}

                    </div>
                    {/*// <!-- Courses Wrapper End -->*/}

                    <div className="row max-mt-50">
                        <div className="col text-center">
                            <Link href="JavaScript:Void(0);" className="btn btn-outline-primary load-more-btn">مطالعه بیشتر <i className="fal fa-redo ml-3"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
            {/*// <!-- Course Section End -->*/}
        </>
    )
}


