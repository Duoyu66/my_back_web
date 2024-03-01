import React, {useState} from "react";
import {Card} from "antd";

const gridStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    textAlign: 'center',
    cursor:'pointer'

};
const tabList = [
    {
        key: 'guanfangwendang',
        tab: '官方文档',
    },
    {
        key: 'uiifrane',
        tab: 'UI-框架',
    },
];

const contentList: Record<string, React.ReactNode> = {
    'guanfangwendang': (
        <div style={{display:'flex'}}>
            <Card.Grid style={gridStyle}>Vue2</Card.Grid>
            <Card.Grid style={gridStyle}>Vue3</Card.Grid>
            <Card.Grid style={gridStyle}>React</Card.Grid>
            <Card.Grid style={gridStyle}>Axios</Card.Grid>
        </div>
    ),
    'uiifrane': (
        <div style={{display: 'flex'}}>
            <Card.Grid style={gridStyle}>Element-UI</Card.Grid>
            <Card.Grid style={gridStyle}>Element-Plus</Card.Grid>
            <Card.Grid style={gridStyle}>Vant</Card.Grid>
            <Card.Grid style={gridStyle}>AntDesgin</Card.Grid>
        </div>
    ),
};

const tabListNoTitle = [
    {
        key: 'article',
        label: 'article',
    },
    {
        key: 'app',
        label: 'app',
    },
    {
        key: 'project',
        label: 'project',
    },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

const HomePage = () => {
    const [activeTabKey1, setActiveTabKey1] = useState<string>('guanfangwendang');
    const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
    };
    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };

    return (
        <>
            <Card
                style={{width: '100%'}}
                title="前端"
                extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
            >
                {contentList[activeTabKey1]}
            </Card>
        </>
    );
}
export default HomePage
