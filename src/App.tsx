import React from 'react';
import './App.css';
import LayoutMain from "./pages";
import zhCN from 'antd/locale/zh_CN';
import {ConfigProvider} from "antd";
function App() {
    return (
        <div className="App">
            <ConfigProvider locale={zhCN}>
                <LayoutMain></LayoutMain>
            </ConfigProvider>

        </div>
    );
}

export default App;
