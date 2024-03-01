import * as echarts from 'echarts';
import {useEffect} from "react";
import './css/index.css'
import {Progress, Statistic} from "antd";
import {LikeOutlined} from '@ant-design/icons';
import CountUp from "react-countup";

const formatter = (value: number) => <CountUp end={value} separator=","/>;

const initChart = () => {
    let myChart = echarts.init(document.getElementById('main'));
    let allPieChart = echarts.init(document.getElementById('allPie'));
// 绘制图表
    myChart.setOption({
        title: {
            text: 'AC题目数量'
        },
        tooltip: {},
        xAxis: {
            data: ['字符串', '数组', '哈希表', '链表', '栈', '动态规划', '贪心', '二叉树', '递归', '排序', '双指针']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 12, 23, 4, 54, 90]
            }
        ]
    });
    allPieChart.setOption({
        title: {
            text: '已AC类型占比',
            subtext: '截止日期至  2024-01-09',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 1048, name: '字符串'},
                    {value: 735, name: '数组'},
                    {value: 580, name: '链表'},
                    {value: 484, name: '哈希表'},
                    {value: 300, name: '动态规划'},
                    {value: 300, name: '二叉树'},
                    {value: 300, name: '贪心'},
                    {value: 300, name: '递归'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
}
const StatisticsScreen = () => {
    useEffect(() => {
        initChart()
    }, []);
    // @ts-ignore
    return (
        <div >
            <div className="analysis-header" style={{backgroundColor:'white',borderRadius:'10px'}}>
                <Statistic className="static-style" title="AC总数" value={1128} prefix={<LikeOutlined/>}/>
                <Statistic className="static-style" title="已AC/未AC" value={93} suffix="/ 100"/>
                <Progress percent={4/5*100} size={[300, 20]}></Progress>
            </div>

            {/*总进度*/}
            {/*AC数量图表*/}
            <div id="main" style={{margin:'15px 0',backgroundColor:'white'}} className="myEchart"></div>
            {/*    做过的题目占比扇形图*/}
            <div id="allPie" className="all-pie" style={{backgroundColor:'white'}}></div>
        </div>
    )
}
export default StatisticsScreen
