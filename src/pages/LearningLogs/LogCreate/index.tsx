import {Button, Form, Input, Modal, Select, Space, DatePicker, Timeline} from "antd";
import {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {SearchOutlined, PlusOutlined} from '@ant-design/icons'
import './css/index.css'
const {Option} = Select;


const {RangePicker} = DatePicker;
const LogCreate = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTime, setSearchTime] = useState([null, null])
    const handleOk = () => {
        setIsModalOpen(false);
        console.log("点击了ok")
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        console.log("点击了calce")
    };
    const createLogBtn = () => {
        setIsModalOpen(true)
    }
    const searchLog = () => {
        console.log("点击了搜索按钮")
    }
    const handleSearchTimeChange = (dates: any) => {
        setSearchTime(dates)
    }
    return (
        <div>
            <div className="header-create">
                <Space>
                    <Select
                        defaultValue="lucy"
                        style={{width: 120,marginLeft:'10px'}}
                        options={[
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                        ]}
                    />
                    {/*<RangePicker value={searchTime}  onChange={handleSearchTimeChange}/>*/}
                    <Button type="primary" onClick={searchLog} icon={<SearchOutlined/>}>
                        查询
                    </Button>
                    <Button type="primary" onClick={createLogBtn} icon={<PlusOutlined/>}>添加日志</Button>
                    {/*传时间参数，和修改字段，修改完成页面重新刷新*/}
                    <Button type="primary" onClick={createLogBtn} icon={<PlusOutlined/>}>编辑日志</Button>
                </Space>

            </div>
            <Modal title="请填写添加日志信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <Form
                        className="create-form-style"
                        form={form}
                        name="control-hooks"
                        style={{maxWidth: 600}}
                        labelCol={{span: 4}}
                    >
                        <Form.Item name="gender" label="日志类型" style={{width: '100%'}} rules={[{required: true}]}>
                            <Select
                                style={{width: '150px'}}
                                placeholder="请选择日志类型"
                                allowClear
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="note" style={{width: '100%'}} label="详情" rules={[{required: true}]}>
                            <TextArea rows={5}/>
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
            <div className="time-line">
                <Timeline
                    style={{width:'90%'}}
                    mode='left'
                    items={[
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },     {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },
                        {
                            label: '2015-09-01',
                            children: '可视化大屏开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '数据结构和算法模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '计划模块开发',
                        },
                        {
                            label: '2015-09-01',
                            children: '项目初始化',
                        },

                    ]}
                />
            </div>
        </div>
    )
}
export default LogCreate
