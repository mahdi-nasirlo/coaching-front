import {Layout} from "antd";
import MenuHeaderLayout, {MobileMenuLayout} from "@/components/layout/header/menu-header-layout";
import Link from "next/link";

const {Header} = Layout

function LayoutHeader() {


    return <Header className="bg-white px-1 md:px-10">
        <nav className="bg-white lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-row flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">کوچ آگاهی</span>
                </Link>


                <div className="flex justify-end items-center lg:order-2">
                    <div className="hidden lg:flex justify-end">
                        <a href="#"
                           className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                            in</a>
                        <a href="#"
                           className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
                            started</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                    <div className="block lg:hidden">
                        <MobileMenuLayout/>
                    </div>
                </div>
                <div
                    className="hidden basis-3/5 justify-center items-center w-full lg:flex lg:justify-center lg:w-auto lg:order-1"
                    id="mobile-menu-2">
                    <MenuHeaderLayout/>
                </div>
            </div>
        </nav>
    </Header>
}

export default LayoutHeader