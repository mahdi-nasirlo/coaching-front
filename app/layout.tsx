import React from 'react';
import {Inter} from 'next/font/google';
import './globals.css'
import '../assets/css/vendor/vendor.min.css'
import '../assets/css/plugins/plugins.min.css'
import '../assets/css/style.min.css'
import AppLayout from "@/components/layout";
import Script from "next/script";
import NextAuthProvider from "@/providers/next-auth-provider";


const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({children}: { children: React.ReactNode }) => (
    <html lang="en">
    <body className={`${inter.className} template-color-10`}>

    <NextAuthProvider>
        <AppLayout>
            <div id="page">
                {children}
            </div>
            <div className="site-main-mobile-menu" id="site-main-mobile-menu">
                <div className="site-main-mobile-menu-inner">
                    <div className="mobile-menu-header">
                        <div className="mobile-menu-logo">
                            {/*<a href="../../../../Desktop/New%20folder/index.html">*/}
                            {/*    <img*/}
                            {/*    alt="" src="../../../../Desktop/New%20folder/assets/images/logo/dark-logo.png"></a>*/}
                        </div>
                        <div className="mobile-menu-close">
                            <button className="toggle">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-menu-content">
                        <nav className="site-mobile-menu">
                            <ul>
                                <li className="has-children position-static">
                                    <a href="#"><span className="menu-text">صفحه اصلی</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>

                                    <ul className="mega-menu">
                                        <li>
                                            <ul>
                                                <li><a href="../../../../Desktop/New%20folder/index.html"><span
                                                    className="menu-text">آموزشی مکس کوچ <span
                                                    className="badge"> داغ </span></span></a></li>
                                                <li><a href="../../../../Desktop/New%20folder/index-2.html"><span
                                                    className="menu-text">پورتال دوره</span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-3.html"><span
                                                    className="menu-text">یادگیری از راه دور <span
                                                    className="badge"> داغ </span></span></a></li>
                                                <li><a href="../../../../Desktop/New%20folder/index-4.html"><span
                                                    className="menu-text">آموزش چندرسانه ای</span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-5.html"><span
                                                    className="menu-text">آموزش مدرن</span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-6.html"><span
                                                    className="menu-text">آموزش از راه دور</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="../../../../Desktop/New%20folder/index-7.html"><span
                                                    className="menu-text">مربیگری بهداشت</span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-8.html"><span
                                                    className="menu-text">مربیگری بدنسازی</span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-9.html"><span
                                                    className="menu-text">کسب و کار</span></a>
                                                </li>
                                                <li><a href="index-10.html"><span className="menu-text">هنر <span
                                                    className="badge primary">جدید</span></span></a>
                                                </li>
                                                <li><a href="../../../../Desktop/New%20folder/index-11.html"><span
                                                    className="menu-text">مربی آشپزخانه <span
                                                    className="badge primary">جدید</span></span></a></li>
                                                <li><a href="../../../../Desktop/New%20folder/index-12.html"><span
                                                    className="menu-text">انگیزشی <span
                                                    className="badge primary">جدید</span></span></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-50">
                                            <ul>
                                                <li>
                                                    {/*<a href="#"><img*/}
                                                    {/*alt="menu-image"*/}
                                                    {/*src="../../../../Desktop/New%20folder/assets/images/menu/mega-menu.jpg"></a>*/}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#"><span className="menu-text">صفحات</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="../../../../Desktop/New%20folder/start-here.html"><span
                                            className="menu-text">نقطه شروع</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/success-story.html"><span
                                            className="menu-text">داستان موفقیت</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/about-me.html"><span
                                            className="menu-text">درباره من</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/about-us-1.html"><span
                                            className="menu-text">درباره ما 01</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/about-us-2.html"><span
                                            className="menu-text">درباره ما 02</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/about-us-3.html"><span
                                            className="menu-text">درباره ما 03</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/contact-me.html"><span
                                            className="menu-text">تماس با من</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/contact-us.html"><span
                                            className="menu-text">تماس با ما</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/purchase-guide.html"><span
                                            className="menu-text">راهنمای خرید </span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/privacy-policy.html"><span
                                            className="menu-text">سیاست حفظ حریم خصوصی</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/terms-of-service.html"><span
                                            className="menu-text">شرایط استفاده از خدمات</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#"><span className="menu-text">دوره ها</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="../../../../Desktop/New%20folder/courses-grid-1.html"><span
                                            className="menu-text">دوره های گرید 01</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/courses-grid-2.html"><span
                                            className="menu-text">دوره های گرید 02</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/courses-grid-3.html"><span
                                            className="menu-text">دوره های گرید 03</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/membership-levels.html"><span
                                            className="menu-text">سطح عضویت</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/become-a-teacher.html"><span
                                            className="menu-text">درخواست معلم شدن</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/profile.html"><span
                                            className="menu-text">پروفایل</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/checkout.html"><span
                                            className="menu-text">پرداخت</span></a></li>
                                        <li className="has-children">
                                            <a href="../../../../Desktop/New%20folder/course-details-sticky-feature-bar.html"><span
                                                className="menu-text">طرح تک</span></a>
                                            <span className="menu-toggle"><i
                                                className="far fa-angle-down"></i></span>
                                            <ul className="sub-menu">
                                                <li><a
                                                    href="../../../../Desktop/New%20folder/course-details-free.html"><span
                                                    className="menu-text">دوره های رایگان</span></a></li>
                                                <li>
                                                    <a href="../../../../Desktop/New%20folder/course-details-sticky-feature-bar.html"><span
                                                        className="menu-text">نوار ویژگی های چسبناک</span></a></li>
                                                <li><a
                                                    href="../../../../Desktop/New%20folder/course-details-standard-sidebar.html"><span
                                                    className="menu-text">سایدبار استاندارد</span></a></li>
                                                <li><a
                                                    href="../../../../Desktop/New%20folder/course-details-no-sidebar.html"><span
                                                    className="menu-text">بدون سایدبار</span></a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#"><span className="menu-text">رویداد ها</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="../../../../Desktop/New%20folder/event.html"><span
                                            className="menu-text">رویداد ها</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/zoom-meetings.html"><span
                                            className="menu-text">زوم میتینگ</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/event-details.html"><span
                                            className="menu-text">جزئیات رویداد</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/zoom-event-details.html"><span
                                            className="menu-text">جزئیات ملاقات زوم</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#"><span className="menu-text">وبلاگ</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="../../../../Desktop/New%20folder/blog-grid.html"><span
                                            className="menu-text">گرید وبلاگ</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/blog-masonry.html"><span
                                            className="menu-text">وبلاگ ساختمانی</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/blog-classic.html"><span
                                            className="menu-text">وبلاگ کلاسیک</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/blog-list.html"><span
                                            className="menu-text">وبلاگ لیستی</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#"><span className="menu-text">فروشگاه</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="../../../../Desktop/New%20folder/shop.html"><span
                                            className="menu-text">فروشگاه سایدبار راست</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/shop-right-sidebar.html"><span
                                            className="menu-text">فروشگاه سایدبار چپ</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/shopping-cart.html"><span
                                            className="menu-text">سبد خرید</span></a>
                                        </li>
                                        <li><a
                                            href="../../../../Desktop/New%20folder/shopping-cart-empty.html"><span
                                            className="menu-text">سبد خالی</span></a></li>
                                        <li><a href="../../../../Desktop/New%20folder/wishlist.html"><span
                                            className="menu-text">علاقه مندیها</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/product-details.html"><span
                                            className="menu-text">تک محصول</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/my-account.html"><span
                                            className="menu-text">حساب کاربری</span></a>
                                        </li>
                                        <li><a href="../../../../Desktop/New%20folder/login-register.html"><span
                                            className="menu-text">ثبت نام / ورود</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </AppLayout>
    </NextAuthProvider>
    <Script src="/assets/js/vendor/vendor.min.js"/>
    <Script src="/assets/js/plugins/plugins.min.js"/>
    <Script src="/assets/js/main.js"/>
    </body>
    </html>
);

export default RootLayout;