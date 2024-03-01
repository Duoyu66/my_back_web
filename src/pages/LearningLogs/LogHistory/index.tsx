import {Avatar, List} from "antd";
import './css/index.css'

const data = [
    {
        title: 'Ant Design Title 1',
        content: '你刚刚提交了数据结构和算法的日志',
        createTime: '2023-01-03'
    },
    {
        title: 'Ant Design Title 2',
        content: '你刚刚提交了数据结构和算法的日志',
        createTime: '2023-01-03'
    },
    {
        title: 'Ant Design Title 3',
        content: '你刚刚提交了数据结构和算法的日志',
        createTime: '2023-01-03'
    },
    {
        title: 'Ant Design Title 4',
        content: '你刚刚提交了数据结构和算法的日志',
        createTime: '2023-01-03'
    },
];

const LogHistory = () => {
    return (
        <div>
            <List
                className="list-style"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                            title={item.content}
                            description={item.createTime}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default LogHistory
