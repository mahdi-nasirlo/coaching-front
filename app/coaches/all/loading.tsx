import React from 'react';
import {Col} from "antd";

function Loading() {
    return <>
        {[...Array(10).map(() => <>
            <Col span={6}>
                <div
                    className="focus:outline-none bg-white shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png"
                             alt="coin avatar"
                             className="w-12 h-12 roundedclassNameName"/>
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p
                                    className="focutabIndexe-none text-xl font-medium leading-5 text-gray-800">Dogecoin
                                    nerds</p>
                                <p
                                    className="focutabIndexe-none text-sm leading-normal pt-2 text-gray-500">36
                                    members</p>
                            </div>
                            <div role="img" aria-label="bookmark">
                                {/*<svg className="focus:outline-none" width="28" height="28" viewBox="0 0 28 28"*/}
                                {/*     fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                                {/*    <path*/}
                                {/*        d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"*/}
                                {/*        stroke="#2C3E50"*/}
                                {/*    />*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="focutabIndexe-none text-sm leading-5 py-4 text-gray-600">A group
                            of
                            people interested in dogecoin, the currency and a bit of side for the meme
                            and
                            dof that
                            we all know and love. These cases are perfectly simple and easy to
                            distinguish.</p>
                        <div className="focutabIndexe-none flex">
                            <div
                                className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin
                            </div>
                            <div
                                className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>)]}
    </>;
}

export default Loading;