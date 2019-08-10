import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import { Table } from 'antd';
import {get,post} from "../Axios"
class Suoyou extends React.Component {
    constructor(props) {
        super()
        this.state={
            data:[]
        }
    }
    render() {
        // const data = [
        //     {
        //         key: 1,
        //         name: 'John Brown',
        //         age: 32,
        //         address: 'New York No. 1 Lake Park',
        //         description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        //     },
        //     {
        //         key: 2,
        //         name: 'Jim Green',
        //         age: 42,
        //         address: 'London No. 1 Lake Park',
        //         description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        //     },
        //     {
        //         key: 3,
        //         name: 'Joe Black',
        //         age: 32,
        //         address: 'Sidney No. 1 Lake Park',
        //         description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        //     },
        // ];
        let {data}=this.state
        const columns = [
            {  dataIndex: 'userName', key: 'userName' },
            {
                
                dataIndex: '',
                key: 'x',
                render: () => <a href="javascript:;">详情</a>,
            },
            {
               
                dataIndex: '',
                key: 'x',
                render: () => <a href="javascript:;">设置管理</a>,
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: () => <a href="javascript:;">删除</a>,
            },
        ];
        return <div className="yemian">
                <Header title="所有" />
            <div className="content">
                  <Left />
                <div className="content-right">


                    <Table
                        columns={columns}
                        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                        dataSource={data}
                    />,

                </div>

            </div>

             </div>
    }
    componentDidMount(){
        let {data}=this.state
        get("/user").then(res=>{
            this.setState({
                data:res.data.result
            })
            console.log(res.data.result)
            
        })
    }
}
export default Suoyou