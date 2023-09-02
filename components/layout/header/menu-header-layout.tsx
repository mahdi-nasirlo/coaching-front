import React, {useState} from 'react';
import {Button, Drawer, Menu, Skeleton} from "antd";
import {BulbOutlined, HomeOutlined, LoadingOutlined} from "@ant-design/icons";
import {MenuProps} from "antd/lib";
import {AcademicCapIcon, CubeIcon} from "@heroicons/react/24/outline";
import {MenuMode} from "@/Types/components/menu";

const items: MenuProps['items'] = [
    {
        label: 'خانه',
        key: 'home',
        icon: <HomeOutlined/>,
    },
    {
        label: 'مربی ها',
        key: 'choaches',
        icon: <BulbOutlined/>,
        disabled: true,
    },
    {
        label: 'دوره ها',
        key: 'courses',
        icon: <AcademicCapIcon width={16} height={16}/>,
        children: [
            {
                label: (<Skeleton.Input size="small" active/>),
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
                label: (<Skeleton.Input size="small" active/>),
                key: 'loading-blog',
                icon: <LoadingOutlined/>,
            },
        ],
    },
];

const MenuHeaderLayout = ({mode}: { mode: MenuMode }) => {

    const [menuItems, setMenuItems] = useState<MenuProps['items']>(items)

    
    return (
        <Menu className="w-full justify-center" mode={mode} items={menuItems}/>
    );
};

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