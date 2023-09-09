import React from 'react';
import {Coach} from "@/Types/app/coach";
import Link from "next/link";
import Image from "next/image";

function CoachList({items}: {
    items: Coach[]
}) {
    return (
        <>
            {items.map((coach: Coach) => <>

                <div className="col max-mb-30" data-aos="fade-up">
                    <div className="course-3">
                        <div className="thumbnail">
                            <Link href="/course-details-standard-sidebar.html" className="image">
                                <Image width={50} height={50} src="/assets/images/courses/170/course-1.jpg"
                                       alt="تصویر دوره"/></Link>
                        </div>
                        <div className="info">
                            <span className="price">{coach.hourly_price_formatted} تومان<span> </span></span>
                            <h3 className="title"><Link href="/course-details-standard-sidebar.html">{coach.name}</Link>
                            </h3>
                            <ul className="meta">
                                <li>تخصص فرد</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>)}
        </>
    );
}

export default CoachList;