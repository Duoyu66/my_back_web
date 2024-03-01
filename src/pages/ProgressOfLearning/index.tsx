import {Button, Progress, Select, Space, Table} from "antd";
import {DownloadOutlined} from '@ant-design/icons'
import './css/index.css'

const twoColors = {'0%': '#108ee9', '100%': '#87d068'};
const dataSource = [
    {
        key: '1',
        name: 'vue3',
        age: 32,
        address: '西湖区湖底公园1号',
        done_progress: 85,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '2',
        name: 'react',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 95,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '3',
        name: 'axios',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 75,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '4',
        name: 'mysql',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 65,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '5',
        name: 'java',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '6',
        name: 'jdbc',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '7',
        name: 'vue2',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '8',
        name: 'hooks',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '9',
        name: 'npm',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '10',
        name: 'yarn',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '11',
        name: 'pnpm',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    }, {
        key: '12',
        name: 'node',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '13',
        name: 'uniapp',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    }, {
        key: '14',
        name: 'taro',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },
    {
        key: '15',
        name: 'fluter',
        age: 42,
        address: '西湖区湖底公园1号',
        done_progress: 15,
        all_progress: 100,
        remark: '本次看到114集15分45秒',
        need_time:'25h'
    },


];

const columns: any = [
    {
        title: '进度名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '80px'

    },
    {
        title: '优先级',
        dataIndex: 'age',
        key: 'age',
        align: 'center',
        width: '60px'
    },
    {
        title: '进度',
        dataIndex: 'done_progress',
        key: 'progress',
        align: 'center',
        render: (_: any, record: any) => (
            <div style={{display: 'flex'}}>
                <Progress  percent={record.done_progress / record.all_progress * 100}
                          strokeColor={twoColors}/>
                <span className="tips-word">({record.done_progress}/{record.all_progress})</span>
            </div>
        )
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'age',
        align: 'center'
    },
    {
        title: '总时长',
        dataIndex: 'need_time',
        key: 'age',
        align: 'center',
        width: '60px'
    },
    {
        title: '预计完成日期',
        dataIndex: 'need_time',
        key: 'age',
        align: 'center',
        width:'120px'
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Button type="primary" onClick={() => handleEdit(record)}>编辑</Button>

                <Button danger type="primary" onClick={() => handleDelete(record)}>已完成</Button>
                {/*跳转到相关资料的视频网址*/}
                <Button type="link" onClick={() => handleJump(record)}>详情</Button>

            </Space>
        ),
    },
];

const handleEdit = (value: any) => {
    console.log("编辑被点击了", value)
}
const handleDelete = (value: any) => {
    console.log("删除被点击了", value)
}
const handleJump = (value: any) => {
    console.log("跳转被点击了", value)
}
const ProgressOfLearning = () => {
    return (
        <div>
            <div className="header-top">

                <Space style={{border:'1px solid red',minWidth:'610px'}}>
                    <span className="title-word">学习类型:</span>
                    <Select
                        defaultValue=""
                        style={{width: 120}}
                        options={[
                            {value: '前端', label: '前端'},
                            {value: '后端', label: '后端'},
                        ]}
                    />
                    <span className="title-word">优先级:</span>
                    <Select
                        defaultValue="P0"
                        style={{width: 120}}
                        options={[
                            {value: 'P0', label: 'P0'},
                            {value: 'P1', label: 'P1'},
                            {value: 'P2', label: 'P2'},
                            {value: 'P3', label: 'P3'},
                        ]}
                    />
                    <Button type="primary" icon={<DownloadOutlined/>}>
                        查询
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined/>}>
                        添加学习进度
                    </Button>
                </Space>
            </div>
            <div>
                <Table size="small" bordered dataSource={dataSource} columns={columns}
                       scroll={{y: 'calc(100vh - 326px)', x: 'max-content'}}/>;
            </div>
        </div>
    )
}
export default ProgressOfLearning
