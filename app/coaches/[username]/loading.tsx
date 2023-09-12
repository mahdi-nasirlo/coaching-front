import React from 'react';
import {Spin} from "antd";

function Loading() {
    return (
        <>
            <div className="flex justify-center items-center h-[70vh] w-full">
                <Spin size="large"/>
            </div>
        </>
    );
}

export default Loading;