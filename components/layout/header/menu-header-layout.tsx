import React, {useState} from 'react';
import {Button, Drawer, Menu} from "antd";
import {BulbOutlined, HomeOutlined} from "@ant-design/icons";
import {MenuProps} from "antd/lib";
import {AcademicCapIcon, CubeIcon} from "@heroicons/react/24/outline";

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
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: "فروشگاه",
        icon: <CubeIcon width={16} height={16}/>,
        key: 'shop',
    },
];

const MenuHeaderLayout = () => {
    return (
        <Menu className="w-full justify-center" mode="horizontal" items={items}/>
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </>
}

// MenuHeaderLayout.propTypes = {};

export default MenuHeaderLayout;