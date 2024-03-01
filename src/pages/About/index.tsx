import axios from "axios";
import {useEffect} from "react";
const About =()=>{

    const getNews=()=>{
        let xhr = new XMLHttpRequest(); // 创建新的XMLHttpRequest对象
        // xhr.open('GET', 'https://api.codelife.cc/api/top/list')
        // console.log("xhr是",xhr)
       // let  headers = xhr[headers]
       // let  encryption_key= headers.get('Signaturekey')

        axios.get('https://api.codelife.cc/api/top/list?lang=cn&id=KqndgxeLl9&size=100',{
            headers:{
                // "signaturekey": encryption_key,
                "version": '1.2.34',
                "origin": 'https://go.itab.link',
                // 'User-Agent': headers['User-Agent']

            }
        }).then(res=>{
            console.log("获取到的新闻是")
        })
    }
    useEffect(() => {
        getNews()
    }, []);
    return (
        <div>
            我是关于组件
        </div>
    )
}
export default About
