import Image from "next/image";
import {getCacheByUid} from "@/services/coach/getCacheByUid";
import React from "react";
import Title from "@/app/coaches/[username]/components/title";

export default async function Page({params}: { params: { username: string } }) {

    const coach = await getCacheByUid(params.username)

    return (
        <>
            <Title/>


            <div className="section">
                <div className="container">
                    <div className="row max-mb-n50">

                        <div className="col-lg-8 col-12 order-lg-1 max-mb-50">

                            <div className="course-details-wrapper">
                                <div className="course-nav-tab">
                                    <ul className="nav">
                                        <li><a data-toggle="tab" href="#instructor">مربی</a></li>
                                        <li><a className="active" data-toggle="tab" href="#overview">بررسی اجمالی</a>
                                        </li>
                                        <li><a data-toggle="tab" href="#curriculum">برنامه درسی</a></li>
                                        <li><a data-toggle="tab" href="#reviews">نظرات </a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div id="overview" className="tab-pane fade show active">
                                        <div className="course-overview">
                                            <h3 className="title">توضیحات دوره</h3>

                                            <p>اکنون بیش از هر زمان دیگری ، شرکت ها سرمایه گذاری زیادی در فناوری اطلاعات
                                                انجام می دهند. کیفیت این سرمایه گذاری ها بر کار روزانه میلیون ها نفر
                                                تأثیر می گذارد.</p>

                                            <p>با این وجود دیدن بررسی های صنعتی که میزان شکست پروژه های IT بیش از 50٪
                                                است ، غیر معمول نیست. می توان بهتر انجام داد و می توان آن را به طور
                                                مداوم انجام داد. از بوم مدل کسب و کار برای تمرکز استراتژی شرکت خود و
                                                تسهیل خرید سهامداران استفاده کنید.</p>

                                            <div className="overview-course-video">
                                                <iframe
                                                    title="تحول دیجیتال را با استراتژی های بسترهای نرم افزاری هدایت کنید دیدگاه تحلیل گر فناوری اطلاعات"
                                                    src="https://www.aparat.com/v/OmyqU"></iframe>
                                            </div>

                                            <p>در این دوره دو هفته ای ، ما چالش های بزرگی را در زمینه IT شرکت و چگونگی
                                                رفع آنها با استفاده منظم از تفکر طراحی ، راه اندازی ناب و چابک به عنوان
                                                یک چارچوب تیم گام برمی داریم..</p>

                                            <p>کار خود را روی Canvas به منشورهای خاصی در IT ترجمه کنید. به سرعت نمونه
                                                هایی از فرآیندهای منطبق با استراتژی را برای پیاده سازی در زیرساخت فناوری
                                                اطلاعات خود ارائه دهید چگونه استراتژی مشتری محوری را تعریف می کنید که می
                                                توانید واقعاً اجرا کنید؟ برای انجام IT استراتژیک ، باید یک استراتژی
                                                داشته باشید! در حالت ایده آل ، شما به موردی نیاز دارید که درک و استفاده
                                                از آن به عنوان مبانی روشنی برای استفاده آسان باشد.</p>

                                            <p>این همان چیزی است که شما در این دوره خواهید آموخت.</p>

                                            <h3 className="title">یک توضیح کوتاه</h3>

                                            <p>روشی مشتری محور برای انجام مشاغل راهی است که تجربه مثبت مشتری را قبل و
                                                بعد از فروش به منظور پیشبرد تکرار تجارت ، افزایش وفاداری مشتری و بهبود
                                                رشد تجارت فراهم می کند..</p>

                                            <p>اما ، یک شرکت مشتری محور چیزی فراتر از شرکتی است که خدمات خوبی ارائه می
                                                دهد. آمازون و زاپوس نمونه های برجسته ای از مارک های مشتری محور هستند و
                                                سالها صرف فرهنگ سازی درمورد مشتری و نیازهای او کرده اند. تعهد آنها در
                                                ارائه ارزش مشتری واقعی است - در واقع ، Zappos خوشحال است که اگر کارمندان
                                                در فرهنگ مشتری مداری آنها نباشد ، از کار اخراج می شود.!</p>

                                            <p>اما مشتری مداری چقدر مهم است؟ خبر خوب این است که بسیار مهم می شود!
                                                Econsultancy اخیراً پرسید که مهمترین ویژگی برای ایجاد فرهنگ واقعاً "بومی
                                                دیجیتال" چیست. پاسخ به این س andال و 58٪ پاسخ دادن به پاسخ ، مشتری محوری
                                                بود. </p>

                                            <p>برای اطلاع از این دوره ثبت نام کنید.</p>

                                        </div>
                                    </div>

                                    <div id="curriculum" className="tab-pane fade">
                                        <div className="course-curriculum">
                                            <ul className="curriculum-sections">
                                                <li className="single-curriculum-section">
                                                    <div className="section-header">
                                                        <div className="section-left">

                                                            <h5 className="title">ساده سازی را تغییر دهید</h5>
                                                            <p className="section-desc">معرفی کلی استراتژی های مشتری
                                                                محوری</p>

                                                        </div>
                                                    </div>
                                                    <ul className="section-content">

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                        <span
                                                            className="item-name">درس 01: اهداف ساده و قابل دستیابی</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">30 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon video">
                                                                    <i className="far fa-video"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span className="item-name">جلسه زنده درباره استراتژی های اینفوتک</span>
                                                                <div className="course-item-meta">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                    <span
                                                                        className="item-meta item-meta-icon zoom-meeting">
                                                                    <i className="far fa-users-class"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                                <span className="item-name">مسابقه 1: بله یا خیر؟</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">3 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">15 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                        <span
                                                            className="item-name">مسابقه 2: یک بازی شبیه سازی ساده</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">0 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">50 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span className="item-name">درس 02: تست A / B</span>
                                                                <div className="course-item-meta">
                                                                    <span className="item-meta duration">02 ساعت </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                                <span
                                                                    className="item-name">مسابقه 3: بازی نقش آفرینی</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">1 سوال </span>
                                                                    <span className="item-meta duration">01 ساعت </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                                <span
                                                                    className="item-name">مسابقه 4: مصاحبه کوتاه</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">9 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">10 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                        <span
                                                            className="item-name">درس 03: در مورد تست A / B خلاصه کنید</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">30 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                        <span
                                                            className="item-name">مسابقه 5: 15 دقیقه سوال بله / خیر </span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">3 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">10 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">

                                                                <span className="item-name">مسابقه 6: پاسخ سریع</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">0 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">10 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="single-curriculum-section">
                                                    <div className="section-header">
                                                        <div className="section-left">

                                                            <h5 className="title">هیئت مشاوره مشتری</h5>
                                                            <p className="section-desc">با اصول هیئت مشاوره مشتری آشنا
                                                                شوید</p>

                                                        </div>
                                                    </div>
                                                    <ul className="section-content">

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span
                                                                    className="item-name">درس 04: هیئت مشاوره مشتری</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">30 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span className="item-name">درس 05: نقش هیئت مشاوره مشتری</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">45 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                        <span
                                                            className="item-name">درس 06: نهادهای هیئت مشاوره مشتری</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">3 سوال </span>
                                                                    <span
                                                                        className="item-meta duration">15 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                                <span className="item-name">آزمون میان مدت: آزمون نوشتاری 60 دقیقه ای</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">5 سوال </span>
                                                                    <span className="item-meta duration">01 ساعت </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li className="single-curriculum-section">
                                                    <div className="section-header">
                                                        <div className="section-left">

                                                            <h5 className="title">بررسی بازخورد</h5>
                                                            <p className="section-desc">موارد مهم در مورد انجام نظرسنجی
                                                                و مدیریت بازخورد</p>

                                                        </div>
                                                    </div>
                                                    <ul className="section-content">

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span
                                                                    className="item-name">درس 07: اهمیت بازخورد مشتری</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">30 دقیقه </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span className="item-name">درس 08: نقش های مشتری</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta duration">45 دقیقه </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link lesson"
                                                               href="JavaScript:Void(0);">
                                                                <span
                                                                    className="item-name">درس 09: نحوه انجام نظرسنجی</span>
                                                                <div className="course-item-meta">
                                                                    <span className="item-meta duration">01 ساعت </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                        <li className="course-item">
                                                            <a className="section-item-link" href="JavaScript:Void(0);">
                                                                <span className="item-name">بحث: چگونه سوالات خوب نظرسنجی و نظرسنجی بنویسیم؟</span>
                                                                <div className="course-item-meta">
                                                                    <span
                                                                        className="item-meta count-questions">0 سوال </span>
                                                                    <span className="item-meta duration">01 ساعت </span>
                                                                    <span className="item-meta item-meta-icon">
                                                                    <i className="fas fa-lock-alt"></i>
                                                                </span>
                                                                </div>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li className="single-curriculum-section">
                                                    <div className="section-header">
                                                        <div className="section-left">

                                                            <h5 className="title">استاد برای شبیه سازی یک روزه</h5>
                                                            <p className="section-desc">این شبیه سازی توسط مدرسین و
                                                                فراگیران بصورت آنلاین برگزار می شود.</p>

                                                        </div>
                                                    </div>
                                                    <div className="learn-press-message success ml-15 mr-15">
                                                        <i className="fa"></i>هیچ موردی در این بخش وجود ندارد
                                                    </div>
                                                </li>

                                                <li className="single-curriculum-section">
                                                    <div className="section-header">
                                                        <div className="section-left">

                                                            <h5 className="title">مطالعات موردی رفتار مشتری</h5>
                                                            <p className="section-desc">در این بخش ، فراگیران فرصتی
                                                                خواهند داشت تا درباره نقش رفتار مشتری در تجارت کاملاً
                                                                بحث کنند</p>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="instructor" className="tab-pane fade">
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
                                                        <h5><a
                                                            href="/profile.html">مگی
                                                            استریکلند</a></h5>
                                                        <div className="author-career">/آموزش دهنده حرفه ای</div>
                                                        <p className="author-bio">مگی یک مربی درخشان است که زندگی اش صرف
                                                            علوم کامپیوتر و عشق به طبیعت شد. او که زن بود ، با موانع
                                                            زیادی روبرو شد و توسط خانواده ممنوع الکار شد. او با روحیه
                                                            واقعی و هدیه ای با استعداد توانست موفق شود و برای دیگران
                                                            الگویی باشد.</p>


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

                                    <div id="reviews" className="tab-pane fade">
                                        <div className="course-reviews">
                                            <div className="course-rating">
                                                <h3 className="title">نظرات</h3>
                                                <div className="course-rating-content">
                                                    <div className="average-rating">
                                                        <p className="rating-title secondary-color">میانگین امتیازات</p>
                                                        <div className="rating-box">
                                                            <div className="average-value primary-color">
                                                                4.50
                                                            </div>
                                                            <div className="review-star">
                                                                <div className="tm-star-rating">
                                                                    <span className="fas fa-star"></span>
                                                                    <span className="fas fa-star"></span>
                                                                    <span className="fas fa-star"></span>
                                                                    <span className="fas fa-star"></span>
                                                                    <span className="fas fa-star-half-alt"></span>
                                                                </div>
                                                            </div>
                                                            <div className="review-amount">
                                                                (2 امتیاز)
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="detailed-rating">
                                                        <p className="rating-title secondary-color">رتبه بندی دقیق</p>
                                                        <div className="rating-box">
                                                            <div className="rating-rated-item">
                                                                <div className="rating-point">
                                                                    <div className="tm-star-rating">
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div className="single-progress-bar">
                                                                        <div className="progress">
                                                                            <div className="progress-bar"
                                                                                 style={{width: "50%"}}
                                                                                 role="progressbar"
                                                                                 aria-valuenow="50" aria-valuemin="0"
                                                                                 aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-count">1</div>
                                                            </div>

                                                            <div className="rating-rated-item">
                                                                <div className="rating-point">
                                                                    <div className="tm-star-rating">
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div className="single-progress-bar">
                                                                        <div className="progress">
                                                                            <div className="progress-bar"
                                                                                 role="progressbar"
                                                                                 style={{width: "50%"}}
                                                                                 aria-valuenow="50" aria-valuemin="0"
                                                                                 aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-count">1</div>
                                                            </div>

                                                            <div className="rating-rated-item">
                                                                <div className="rating-point">
                                                                    <div className="tm-star-rating">
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div className="single-progress-bar">
                                                                        <div className="progress">
                                                                            <div className="progress-bar"
                                                                                 role="progressbar"
                                                                                 style={{width: "0%"}} aria-valuenow="0"
                                                                                 aria-valuemin="0"
                                                                                 aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-count">0</div>
                                                            </div>

                                                            <div className="rating-rated-item">
                                                                <div className="rating-point">
                                                                    <div className="tm-star-rating">
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div className="single-progress-bar">
                                                                        <div className="progress">
                                                                            <div className="progress-bar"
                                                                                 role="progressbar"
                                                                                 style={{width: "0%"}}
                                                                                 aria-valuenow="0" aria-valuemin="0"
                                                                                 aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-count">0</div>
                                                            </div>

                                                            <div className="rating-rated-item">
                                                                <div className="rating-point">
                                                                    <div className="tm-star-rating">
                                                                        <span className="fas fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                        <span className="far fa-star"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div className="single-progress-bar">
                                                                        <div className="progress">
                                                                            <div className="progress-bar"
                                                                                 role="progressbar"
                                                                                 style={{width: "50%"}}
                                                                                 aria-valuenow="0" aria-valuemin="0"
                                                                                 aria-valuemax="100"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rating-count">0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            <div className="course-price">
                                            <span className="meta-label">
                                                <i className="meta-icon far fa-money-bill-wave"></i>
                                               قیمت	 </span>
                                                <span className="meta-value">
                                                <span className="price">19000 تومان<span
                                                    className="decimals-separator"></span></span>
                                            </span>
                                            </div>
                                            <div className="course-meta">
                                                <div className="course-instructor">
                                                <span className="meta-label">
                                                    <i className="far fa-chalkboard-teacher"></i>
                                                    مربی	</span>
                                                    <span className="meta-value">مگی استریکلند</span>
                                                </div>
                                                <div className="course-duration">
                                                <span className="meta-label">
                                                    <i className="far fa-clock"></i>
                                                    مدت زمان				</span>
                                                    <span className="meta-value">15 هفته </span>
                                                </div>
                                                <div className="course-lectures">
                                                <span className="meta-label">
                                                    <i className="far fa-file-alt"></i>
                                                    سخنرانی ها			 </span>
                                                    <span className="meta-value">24</span>
                                                </div>

                                                <div className="course-students">
                                                <span className="meta-label">
                                                    <i className="far fa-user-alt"></i>
                                                    ثبت نام شده	</span>
                                                    <span className="meta-value">629 دانش آموز</span>
                                                </div>
                                                <div className="course-language">
                                                <span className="meta-label">
                                                    <i className="far fa-language"></i>
                                                   زبان				</span>
                                                    <span className="meta-value">انگلیسی</span>
                                                </div>
                                                <div className="course-time">
                                                <span className="meta-label">
                                                    <i className="far fa-calendar"></i>
                                                    ضرب الاجل			</span>
                                                    <span className="meta-value">دی 1399</span>
                                                </div>
                                            </div>
                                            <div className="lp-course-buttons">
                                                <button
                                                    className="btn btn-primary btn-hover-secondary btn-width-100">ثبت
                                                    نام
                                                </button>
                                            </div>
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


