import {Button, Form, Input, Select, Space, Table, Tag} from "antd";
import {PlusOutlined, SearchOutlined} from '@ant-design/icons'
import './css/index.css'
import {useEffect, useState} from "react";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const handleEdit = (value: any) => {
    console.log("编辑被点击了", value)
}
const handleDelete = (value: any) => {
    console.log("删除被点击了", value)
}
const handleJump = (value: any) => {
    console.log("跳转被点击了", value)
}
const dataSource = [
    {
        key: '1',
        name: '腾讯',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: '未开始'
    },
    {
        key: '2',
        name: '字节跳动',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '3',
        name: '阿里',
        scale: 32,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: '待一面',
        url: ''
    },
    {
        key: '4',
        name: '京东',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '5',
        name: '百度',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '6',
        name: '美团',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '7',
        name: '小米',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '8',
        name: '快手',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '9',
        name: '网易',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '10',
        name: '华为',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '11',
        name: '滴滴',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '12',
        name: '拼多多',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '13',
        name: '比亚迪',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
    {
        key: '14',
        name: '科大讯飞',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: '未过初筛'
    },
    {
        key: '15',
        name: '用友',
        scale: 42,
        address: '西湖区湖底公园1号',
        priority: 'P0',
        status: 'AC'
    },
];

const columns: any = [
    {
        title: '排行榜',
        dataIndex: 'key',
        key: 'row',
        align: 'center',
        width: '70px'

    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '100px'
    },
    {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
        align: 'center',
        width: '100px'
    },

    {
        title: '公司规模',
        dataIndex: 'scale',
        key: 'scale',
        render: (text: number, record: any) =>
            (
                <div>
                    {text}/人
                </div>
            ),
        align: 'center',
        width: '120px'
    },
    {
        title: '目前状态',
        dataIndex: 'status',
        key: 'status',
        render: (text: string) => (
            <Tag color={getStatusColor(text)}>{text}</Tag>
        ),
        align: 'center',
        width: '120px'
    },
    {
        title: '备注',
        dataIndex: 'priority',
        key: 'priority',
        align: 'center',
        width: '150px'
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: '10px',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Button type="primary" onClick={() => handleEdit(record)}>编辑</Button>

                <Button danger type="primary" onClick={() => handleDelete(record)}>删除</Button>
                <Button type="link" onClick={() => handleJump(record)}>详情</Button>
            </Space>
        ),
    },

];
// 根据 status 的值返回对应的标签颜色
const getStatusColor = (status: string) => {
    switch (status) {
        case '未开始':
            return '#2db7f5';
        case 'AC':
            return '#87d068';
        case '已完成':
            return 'green';
        default:
            return 'default';
    }
};

const LikeCompany = () => {
    return (
        <div>
            <div className="header-top">
                <Form
                    name="basic"
                    className="search-form"
                    autoComplete="off"
                >
                    <Space>
                        <Form.Item<FieldType>
                            label="名称"
                            name="username"
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="优先级"
                            name="password"
                        >
                            <Select

                                style={{width: 120}}
                                options={[
                                    {value: 'P0', label: 'P0'},
                                    {value: 'P1', label: 'P1'},
                                    {value: 'P2', label: 'P2'},
                                ]}
                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="公司类型"
                            name="password"
                        >
                            <Select
                                style={{width: 120}}
                                options={[
                                    {value: '私企', label: '私企'},
                                    {value: '国企', label: '国企'},
                                    {value: '头部', label: '头部'},
                                    {value: '冲刺', label: '冲刺'},
                                ]}
                            />
                        </Form.Item>

                    </Space>
                </Form>
                <Space style={{marginLeft: '10px'}}>
                    <Button type="primary" shape="round" icon={<SearchOutlined/>}> 查询
                    </Button>
                    <Button type="primary" shape="round" icon={<PlusOutlined/>}> 添加信息
                    </Button>
                </Space>
            </div>
            <Table size="small" loading={false} bordered scroll={{y: 'calc(100vh - 297px)', x: 'max-content'}}
                   style={{backgroundColor: 'white',}} className="table-style" dataSource={dataSource}
                   columns={columns}/>
        </div>
    )
}
export default LikeCompany
