import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Suspense, useEffect, useState} from 'react';
import routers from '../router';
import {Spin} from "antd";

// 递归解析路由组件
const generateRoutes = (routes:any) => {
    return routes.map((route:any, index:number) => (
        <Route key={index} path={route.path} element={<route.component />}>
            {route.children && route.children.length > 0 && generateRoutes(route.children)}
        </Route>
    ));
};

const LayoutMain = () => {
    useEffect(() => {
    }, []);
    return (
        <Suspense fallback={<div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}><Spin size="large"/></div>}>
            <Router>
                <Routes>{generateRoutes(routers)}</Routes>
            </Router>
        </Suspense>
    );
};

export default LayoutMain;
