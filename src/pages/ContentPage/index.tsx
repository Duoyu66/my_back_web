import './index.css'
import React, {Suspense, useEffect, useState} from 'react';
import {
    DesktopOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    SettingOutlined,
    LineChartOutlined,
    CalendarOutlined,
    HistoryOutlined
} from '@ant-design/icons';
import {Avatar, Button, MenuProps, Popover} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import HeaderTop from "../../components/HeaderTop";
import myLogo from '@/assets/img/mylogo.png'
import {HashRouter as Router, NavLink, Outlet, Route, Routes, useNavigate,useLocation } from "react-router-dom";
import routers from "@/router";
const lastRoutes = routers[3].children
const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getIconComponent = (iconName: string)=> {
    switch (iconName) {
        case 'HomeOutlined':
            return HomeOutlined;
        case 'SettingOutlined':
            return SettingOutlined;
        case 'DesktopOutlined':
            return DesktopOutlined;
        case 'LineChartOutlined':
            return LineChartOutlined
        case  'CalendarOutlined':
            return CalendarOutlined
        case 'HistoryOutlined':
            return HistoryOutlined
        // 添加其他图标的导入和映射关系

        default:
            return null;
    }
};
let myItems:any = []
function generateMenuItems(routes: any,parentPath =""): MenuItem[] {
    return routes.map((route:any) => {
     if(!route.hidden){
         const IconComponent:any = route.meta!=undefined?getIconComponent(route.meta.icon):null;
         const menuItem: any = {
             label: route.title,
             key: parentPath +"/"+route.path,
             icon: IconComponent ? <IconComponent /> : null,
             meta:route.meta?route.meta:null
         };

         if (route.children) {
             // @ts-ignore
             menuItem.children = generateMenuItems(route.children, (parentPath + "/" + route.path));
         }
         return menuItem;
     }


    });
}
myItems=generateMenuItems(lastRoutes)
const ContentPage = (props:any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const silderClick = (value: any) => {
        const { meta } = value.item.props;
        navigate("/contentPage" + value.key, {state:meta})
    }

    // @ts-ignore
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme="light" style={{position: 'relative'}} collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                {/*侧边栏logo*/}
                <div className="demo-logo-vertical">
                    <img src={myLogo} alt="图片错误"/>
                </div>
                {/*侧边栏主菜单*/}
                <Menu onClick={silderClick} expandIcon theme="light" defaultSelectedKeys={['1']} mode="inline"
                     items={myItems}
                />
                <Button type="text" className="flodOrExpand" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </Sider>
            <Layout>
                {/*layout布局顶部header*/}
                <HeaderTop></HeaderTop>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>产品首页</Breadcrumb.Item>
                        <Breadcrumb.Item>百度产品列表</Breadcrumb.Item>
                        <Breadcrumb.Item>实例化产品页</Breadcrumb.Item>
                        <Breadcrumb.Item>用户资源</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="main-content"
                         style={{
                             padding: 0,
                             minHeight: 360,
                           backgroundColor:'#f5f5f5',
                             borderRadius: borderRadiusLG,
                         }}
                    >
                        <div className="">

                            <Outlet></Outlet>
                        </div>
                        {(location.state!=null&&!location.state.hiddenFooter)?<Footer style={{textAlign: 'center'}}>
                            My Bolg ©{new Date().getFullYear()} Created by LBL
                        </Footer>:''}
                    </div>

                </Content>

            </Layout>
        </Layout>
    )
}
export default ContentPage
