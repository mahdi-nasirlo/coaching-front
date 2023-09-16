import Image from "next/image";
import {getCacheByUid} from "@/services/coach/getCacheByUid";
import React from "react";
import Title from "@/app/coaches/[username]/components/title";
import {Coach} from "@/Types/app/coach";
import Appointment from "@/app/coaches/[username]/components/appointment";

export default async function Page({params}: {
    params: {
        username: string
    }
}) {

    let data = await getCacheByUid(params.username)
    const coach: Coach = data.data

    console.log(coach)

    return (
        <>
            <Title name={coach.username}/>


            <div className="section">
                <div className="container">
                    <div className="row max-mb-n50">

                        <div className="col-lg-8 col-12 order-lg-1 max-mb-50">

                            <div className="course-details-wrapper">
                                <div className="course-nav-tab">
                                    <ul className="nav">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#instructor">درباره من</a>
                                        </li>
                                        {
                                            coach.education &&
                                            <li><a data-toggle="tab" href="#education">سوابق تحصیلی</a></li>
                                        }
                                        {
                                            coach.job_experience &&
                                            <li><a data-toggle="tab" href="#job_experience">سوابق شغلی</a></li>
                                        }
                                        <li><a data-toggle="tab" href="#reviews">نظرات </a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">

                                    <div id="instructor" className="tab-pane fade show active">
                                        <div className="course-instructor">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="profile-image">
                                                        <Image width="50" height="50"
                                                               src="/assets/images/profile/instructor.jpg"
                                                               alt="profile"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="profile-info">
                                                        <h5>
                                                            <a href="/profile.html">
                                                                {coach.name}
                                                            </a>
                                                        </h5>
                                                        {!coach?.best_on &&
                                                            <div className="author-career">معروف به</div>}

                                                        <p className="author-bio">
                                                            {coach.about_me}
                                                        </p>


                                                        <ul className="author-social-networks">
                                                            <li className="item">
                                                                <a href="JavaScript:Void(0);" target="_blank"
                                                                   className="social-link"> <i
                                                                    className="fab fa-twitter social-link-icon"></i>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <a href="JavaScript:Void(0);" target="_blank"
                                                                   className="social-link"> <i
                                                                    className="fab fa-facebook-f social-link-icon"></i>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <a href="JavaScript:Void(0);" target="_blank"
                                                                   className="social-link"> <i
                                                                    className="fab fa-instagram social-link-icon"></i>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <a href="JavaScript:Void(0);" target="_blank"
                                                                   className="social-link"> <i
                                                                    className="fab fa-pinterest social-link-icon"></i>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <a href="JavaScript:Void(0);" target="_blank"
                                                                   className="social-link"> <i
                                                                    className="fab fa-youtube social-link-icon"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        coach.education &&
                                        <div id="education" className="tab-pane fade">
                                            <div className="course-overview">
                                                {coach.education}
                                            </div>
                                        </div>
                                    }

                                    {coach.job_experience && <div id="job_experience" className="tab-pane fade">
                                        <div className="course-curriculum">
                                            {coach.job_experience}
                                        </div>
                                    </div>}


                                    <div id="reviews" className="tab-pane fade">
                                        <div className="course-reviews">
                                            <div className="course-rating">
                                                <h3 className="title">نظرات</h3>
                                            </div>
                                            <div className="course-reviews-area">
                                                <ul className="course-reviews-list">
                                                    <li className="review">
                                                        <div className="review-container">
                                                            <div className="review-author">
                                                                <Image width="50" height="50"
                                                                       src="/assets/images/review-author/author1.jpg"
                                                                       alt="author"/>
                                                            </div>
                                                            <div className="review-content">
                                                                <h4 className="title">ادنا واتسون</h4>
                                                                <div className="review-stars-rated"
                                                                     title="5 out of 5 stars">
                                                                    <div className="review-stars empty"></div>
                                                                </div>
                                                                <h5 className="review-title">تمام نیازهای من را
                                                                    بپوشانید </h5>
                                                                <div className="review-text">
                                                                    این دوره مواردی را که می خواهیم تغییر دهیم مشخص می
                                                                    کند و سپس کارهایی را که باید برای ایجاد نتیجه مطلوب
                                                                    انجام شود ، مشخص می کند. این دوره به من کمک کرد تا
                                                                    به روشنی مشکلات را تعریف کنم و طیف گسترده تری از راه
                                                                    حل های با کیفیت را ایجاد کنم. از تحلیل ساختارهای
                                                                    بیشتر گزینه هایی که منجر به تصمیم گیری بهتر می شوند
                                                                    پشتیبانی کنید.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="review">
                                                        <div className="review-container">
                                                            <div className="review-author">
                                                                <Image width="50" height="50"
                                                                       src="/assets/images/review-author/author2.jpg"
                                                                       alt="author"/>
                                                            </div>
                                                            <div className="review-content">
                                                                <h4 className="title">اوون مسیح</h4>
                                                                <div className="review-stars-rated"
                                                                     title="5 out of 5 stars">
                                                                    <div className="review-stars empty"></div>
                                                                </div>
                                                                <h5 className="review-title">جذاب و سرگرم کننده</h5>
                                                                <div className="review-text">
                                                                    این دوره مواردی را که می خواهیم تغییر دهیم مشخص می
                                                                    کند و سپس کارهایی را که باید برای ایجاد نتیجه مطلوب
                                                                    انجام شود ، مشخص می کند. این دوره به من کمک کرد تا
                                                                    به روشنی مشکلات را تعریف کنم و طیف گسترده تری از راه
                                                                    حل های با کیفیت را ایجاد کنم. از تحلیل ساختارهای
                                                                    بیشتر گزینه هایی که منجر به تصمیم گیری بهتر می شوند
                                                                    پشتیبانی کنید
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-12 order-lg-2 max-mb-50" id="sticky-sidebar">
                            <div className="sidebar-widget-wrapper pr-0">
                                <div className="sidebar-widget">
                                    <div className="sidebar-widget-content">
                                        <div className="sidebar-entry-course-info">
                                            <div className="course-nav-tab">
                                                <ul className="nav mb-3">
                                                    <li>
                                                        <a className="active" data-toggle="tab" href="#instructor">
                                                            رزور جلسه کوچینگ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="course-price">
                                            <span className="meta-label text-[14px] font-normal">
                                                <i className="meta-icon far fa-money-bill-wave"></i>
                                               قیمت هر جلسه	 </span>
                                                <span className="meta-value">
                                                <span
                                                    className="price text-[22px] font-medium">{coach.hourly_price_formatted} تومان<span
                                                    className="decimals-separator"></span></span>
                                            </span>
                                            </div>
                                            <Appointment uuid={coach.uuid}/>
                                            <div className="entry-course-share">
                                                <div className="share-media">

                                                    <div className="share-label">اشتراک گذاری این دوره</div>
                                                    <span className="share-icon far fa-share-alt"></span>

                                                    <div className="share-list">
                                                        <a className="hint--bounce hint--top hint--theme-two"
                                                           aria-label="فیس بوک" target="_blank"
                                                           href="JavaScript:Void(0);"><i
                                                            className="fab fa-facebook-f"></i></a>

                                                        <a className="hint--bounce hint--top hint--theme-two"
                                                           aria-label="توییتر" target="_blank"
                                                           href="JavaScript:Void(0);"><i className="fab fa-twitter"></i></a>

                                                        <a className="hint--bounce hint--top hint--theme-two"
                                                           aria-label="لینکدین" target="_blank"
                                                           href="JavaScript:Void(0);"><i
                                                            className="fab fa-linkedin"></i></a>

                                                        <a className="hint--bounce hint--top hint--theme-two"
                                                           aria-label="تامبلر" target="_blank"
                                                           href="JavaScript:Void(0);"><i
                                                            className="fab fa-tumblr-square"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="related-courses-section section section-padding">
                <div className="container">

                    <div className="section-title text-center mb-35" data-aos="fade-up">
                        <h3 className="title">دوره های اخیر​</h3>
                    </div>

                    <div className="courses-slider swiper-container" data-aos="fade-up">

                        <div className="swiper-wrapper">

                            <div className="swiper-slide mb-30">
                                <div className="course box-shadow">
                                    <div className="thumbnail">
                                        <a href="/course-details-standard-sidebar.html"
                                           className="image"><Image width="50" height="50"
                                                                    src="/assets/images/courses/370/course-6.jpg"
                                                                    alt="تصویر دوره"/></a>
                                    </div>
                                    <div className="info">
                                        <span className="price">59000 تومان<span> </span></span>
                                        <h3 className="title"><a
                                            href="/course-details-standard-sidebar.html">معرفی
                                            جاوا اسکریپت برای مبتدیان</a></h3>
                                        <ul className="meta">
                                            <li><i className="far fa-file-alt"></i>14 درس</li>
                                            <li><i className="far fa-user-alt"></i>70 دانش آموز</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide mb-30">
                                <div className="course box-shadow">
                                    <div className="thumbnail">
                                        <a href="/course-details-standard-sidebar.html"
                                           className="image"><Image width="50" height="50"
                                                                    src="/assets/images/courses/370/course-6.jpg"
                                                                    alt="تصویر دوره"/></a>
                                    </div>
                                    <div className="info">
                                        <span className="price">59000 تومان<span> </span></span>
                                        <h3 className="title"><a
                                            href="/course-details-standard-sidebar.html">معرفی
                                            جاوا اسکریپت برای مبتدیان</a></h3>
                                        <ul className="meta">
                                            <li><i className="far fa-file-alt"></i>14 درس</li>
                                            <li><i className="far fa-user-alt"></i>70 دانش آموز</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide mb-30">
                                <div className="course box-shadow">
                                    <div className="thumbnail">
                                        <a href="/course-details-standard-sidebar.html"
                                           className="image"><Image width="50" height="50"
                                                                    src="/assets/images/courses/370/course-6.jpg"
                                                                    alt="تصویر دوره"/></a>
                                    </div>
                                    <div className="info">
                                        <span className="price">59000 تومان<span> </span></span>
                                        <h3 className="title"><a
                                            href="/course-details-standard-sidebar.html">معرفی
                                            جاوا اسکریپت برای مبتدیان</a></h3>
                                        <ul className="meta">
                                            <li><i className="far fa-file-alt"></i>14 درس</li>
                                            <li><i className="far fa-user-alt"></i>70 دانش آموز</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="swiper-pagination"></div>

                    </div>
                </div>
            </div>
        </>
    )
}


