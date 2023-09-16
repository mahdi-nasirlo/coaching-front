import React from 'react';
import Link from "next/link";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>

            <div className="page-title-section section">
                <div className="page-title">
                    <div className="container">
                        <h1 className="title" data-aos="zoom-in">لیست کوچ ها</h1>
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

            <div className="section section-padding-bottom">
                <div className="container">

                    {children}

                </div>
            </div>

        </>
    );
}

export default Layout;