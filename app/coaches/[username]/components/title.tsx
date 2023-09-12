import React from 'react';
import Link from "next/link";

function Title() {

    return (
        <div className="page-title-section pt-0 section">
            <div className="page-breadcrumb">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><Link href="/">صفحه اصلی</Link></li>
                        <li><Link href="/coaches/all">مربی ها</Link></li>
                        <li className="current">{}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Title;