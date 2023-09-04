"use client"

import React, {useEffect, useState} from 'react';
import {Button, Drawer, Menu} from "antd";
import {BulbOutlined, HomeOutlined, LoadingOutlined} from "@ant-design/icons";
import {MenuProps} from "antd/lib";
import {AcademicCapIcon, CubeIcon} from "@heroicons/react/24/outline";
import {MenuMode} from "@/Types/components/menu";
import useSWR from "swr";
import {usePathname} from "next/navigation";
import {getAllBlogCategory} from "@/services/blog/category/getAll";
import Link from "next/link";

let items: MenuProps['items'] = [
    {
        label: 'خانه',
        key: '/',
        icon: <HomeOutlined/>,
    },
    {
        label: 'مربی ها',
        key: 'coaches',
        icon: <BulbOutlined/>,
        disabled: true,
    },
    {
        label: 'دوره ها',
        disabled: true,
        key: 'courses',
        icon: <AcademicCapIcon width={16} height={16}/>,
        children: [
            {
                key: 'loading-courses',
                icon: <LoadingOutlined/>,
            },
        ],
    },
    {
        label: "فروشگاه",
        icon: <CubeIcon width={16} height={16}/>,
        key: 'shop',
    },
    {
        label: 'بلاگ',
        key: 'blog',
        icon: <AcademicCapIcon width={16} height={16}/>,
        children: [
            {
                key: 'loading-blog',
                icon: <LoadingOutlined/>,
            },
        ],
    },
];

type MenuItem = {
    name: string,
    is_visible: boolean,
    slug: string,
    children: MenuItem
}

const MenuHeaderLayout = ({mode}: { mode: MenuMode }) => {

    const [current, setCurrent] = useState('mail');

    const pathname = usePathname();


    const {data: blogItems, isLoading: ldBlogCategory} = useSWR("/blog/category", getAllBlogCategory)

    const onClick: MenuProps['onClick'] = (e) => {

        setCurrent(e.key);

    };

    useEffect(() => {

        setCurrent(pathname);

    }, [current, pathname]);

    return (
        <>
            <Menu id="menu-header" onClick={onClick} selectedKeys={[current]} className="w-full justify-center"
                  mode={mode}>
                <Menu.Item key='/' icon={<HomeOutlined/>}>
                    <Link href={"/"}>
                        خانه
                    </Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined/>} disabled key="coaches">
                    <Link href={"/"}>
                        مربی ها
                    </Link>
                </Menu.Item>

                <Menu.Item disabled key="courses" icon={<AcademicCapIcon width={16} height={16}/>}>
                    <Link href={"/"}>
                        دوره ها
                    </Link>
                </Menu.Item>

                <Menu.Item icon={<CubeIcon width={16} height={16}/>} disabled key={"shop"}>
                    <Link href={"/"}>
                        فروشگاه
                    </Link>
                </Menu.Item>

                <Menu.SubMenu icon={<AcademicCapIcon width={16} height={16}/>} key={"blog"} title="بلاگ">
                    <NestedMenu isLoading={false} items={blogItems}/>
                </Menu.SubMenu>
            </Menu>
        </>
    );
};

const NestedMenu = ({isLoading, items}: { isLoading: boolean, items: [] }) => {

    if (isLoading) {

        return <Menu.Item icon={<LoadingOutlined/>}></Menu.Item>

    }

    return items?.map((item: MenuItem) => {

        if (item?.children) {
            return <><Menu.SubMenu title={item.name} key={item.slug}>
                {/*@ts-ignore*/}
                <NestedMenu isLoading={false} items={item.children}/>
            </Menu.SubMenu></>
        }

        return <> <Menu.Item disabled={!item.is_visible} key={item.slug}>
            <Link href={`/blog/category/${item.slug}`}>
                {item.name}
            </Link>
        </Menu.Item></>

    })

}

export const MobileMenuLayout = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return <>
        <Button type="primary" onClick={showDrawer}>
            Open
        </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <MenuHeaderLayout mode="inline"/>
        </Drawer>
    </>
}

// MenuHeaderLayout.propTypes = {};

export default MenuHeaderLayout;