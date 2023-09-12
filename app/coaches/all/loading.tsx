import React from 'react';

function Loading() {
    return (
        <>
            <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">
                {[...Array(10)].map((item) => <>
                    <div className="col max-mb-30">
                        <div className="course-3 w-full">
                            <div className="thumbnail skeleton flex">
                                <div className="w-full h-full"></div>
                            </div>
                            <div className="info flex-grow-1">
                                <span className="price skeleton h-3 w-75"> </span>
                                <h3 className="title skeleton h-3 w-7/12">
                                </h3>
                                <ul className="meta skeleton h-2 mt-5 w-25">
                                </ul>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </>
    );
}

export default Loading;