import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import { Table } from 'antd';
import {get,post} from "../Axios"
import Tankuang from "../component/Tankuang"
import {withRouter} from "react-router-dom"
class Suoyou extends React.Component {
    constructor(props) {
        super()
        this.state={
            data:[],
            isfals:false,
            sonprops:{}
        }
    }
    render() {
    //    alert(123)
        let {data,isfals,sonprops}=this.state
        const columns = [
            {title: '名子',  dataIndex: 'userName', key: '0x',id:"userId"},
            {
                title: '详情',
                dataIndex: '',
                key: '1',
                id:"userId",
                render: (id) => <a href="javascript:;" onClick={this.xiangqing.bind(this,id)}>详情</a>,
            },
            {
                title: '设置管理',
                dataIndex: '',
                key: '2',
                id:"userId",
                render: () => <a href="javascript:;">设置管理</a>,
            },
            {
                title: '编辑',
                dataIndex: '',
                key: '3',
                id:"userId",
                render: (id) => <a href="javascript:;" onClick={this.bianji.bind(this,id)}>编辑</a>,
            }, {
                title: '删除',
                dataIndex: '',
                key: '4',
                id:"userId",
                render: (id) => <a href="javascript:;" onClick={this.deleat.bind(this,data,id.userId)}>删除</a>,
            },
        ];
        return <div className="yemian">
                <Header title="所有" />
            <div className="content">
                  <Left />
                <div className="content-right">


                    <Table columns={columns} dataSource={data}></Table>
                    {
                       isfals?<Tankuang data={sonprops} fuchuanzi={(res)=>{ 
                           this.setState({
                               isfals:res
                           })
                       }}/>:""
                    }
                    
                </div>

            </div>

             </div>
    }
    componentDidMount(){
        this.moren()
    }
    deleat(data,id){
        console.log(id)
       post("/user/delete",{userId:id}).then(res=>{
          this.moren()
       })
    }
    moren(){
        let {data}=this.state
        get("/user").then(res=>{
            this.setState({
                data:res.data.result
            })
            console.log(res.data.result)
            
        })
    }
    bianji(id){
        console.log(id)
        let {sonprops,isfals}=this.state;
        this.setState({
            sonprops:id,
            isfals:true
        })
    }
    xiangqing(id){
        this.props.history.push("/xiangqing",id)
        // console.log(this.props)
    }
}
export default withRouter(Suoyou)