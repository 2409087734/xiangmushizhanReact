import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import {get} from "../Axios"
import { Radio } from 'antd';
import 'antd/dist/antd.css';
class Chengyuan extends React.Component{
    constructor(props){
        super()
        this.state={
            suoyouxiaozu:[]
        }
    }
    render(){
        let {suoyouxiaozu}=this.state
        console.log(suoyouxiaozu)
        return  <div className="yemian">
        <Header title="成员"/>
        <div className="content">
        <Left/>
         <div className="content-right">
            <Radio.Group defaultValue="a" buttonStyle="solid" className="xiaozuName-box" style={{ marginTop: 16 }}>
            {
                suoyouxiaozu&&suoyouxiaozu.map((item,index)=><Radio.Button value={item.groupPersonNum} >{item.groupName}</Radio.Button>)
            }
            </Radio.Group>
        </div>
        </div>

         </div>
    }
    componentDidMount(){
        get("/group/list").then(res=>{
            if(res.data.message){
                this.setState({
                suoyouxiaozu:res.data.result
            })
                get("/group/members",{groupld:1029}).then(res=>{
                    console.log(res)
                })
            }
            
            
        })
    }
}
export default Chengyuan