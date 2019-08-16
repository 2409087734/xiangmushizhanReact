import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import { Table } from 'antd';
import { get, post } from "../Axios"
import Tankuang from "../component/Tankuang"
import { withRouter } from "react-router-dom"
import LoadMoreList from "./Guanli"
import { connect } from "react-redux"
class Suoyou extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            isfals: false,
            sonprops: {},
            list: []
        }
    }
    render() {
        //    alert(123)
        let { list } = this.state
        let { data, isfals, sonprops } = this.state
        const columns = [
            { title: '头像', dataIndex: 'userIcon', id: "userId", render: (dataIndex) => <img className="img" src={dataIndex} />, },
            { title: '名子', dataIndex: 'userName', id: "userId" },
            {
                title: '详情',
                dataIndex: '',

                id: "userId",
                render: (id) => <a href="javascript:;" onClick={this.xiangqing.bind(this, id)}>详情</a>,
            },
            {
                title: '设置管理',
                dataIndex: '',

                id: "userId",
                render: (id) => <a href="javascript:;" onClick={this.guanli.bind(this, id)}>设置管理</a>,
            },
            {
                title: '编辑',
                dataIndex: '',

                id: "userId",
                render: (id) => <a href="javascript:;" onClick={this.bianji.bind(this, id)}>编辑</a>,
            }, {
                title: '删除',
                dataIndex: '',

                id: "userId",
                render: (id) => <a href="javascript:;" onClick={this.deleat.bind(this, data, id.userId)}>删除</a>,
            }
        ];

        return <div className="yemian">
            <Header title="所有" />
            <div className="content">
                <Left sousuocuancan={(res)=>{this.setState({data:res})}}/>
                <div className="content-right">


                    <Table className="components-table-demo-nested"
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 6 }}
                    ></Table>
                    {
                        isfals ? <Tankuang data={sonprops} fuchuanzi={(res) => {
                            this.setState({
                                isfals: res
                            })
                        }} className="ant-table-wrapper" shuju={(res) => { this.setState({ data: res.result }) }} /> : ""
                    }
                    <div className="LoadMoreList-box">
                        <li>管理员</li>
                        {list.length > 0 ? <LoadMoreList list={list} /> : ""}
                    </div>




                </div>

            </div>

        </div>
    }
    componentDidMount() {
        this.moren()

    }
    deleat(data, id) {
        console.log(id)
        post("/user/delete", { userId: id }).then(res => {
            this.moren()
        })
    }
    moren(isfalse) {

        let { data } = this.state
        get("/user").then(res => {
            this.setState({
                data: res.data.result
            })
            console.log(res.data.result)

        })
    }
    bianji(id) {
        console.log(id)
        let { sonprops, isfals } = this.state;
        this.setState({
            sonprops: id,
            isfals: true
        })
    }
    xiangqing(id) {
        this.props.history.push("/xiangqing", id)
        // console.log(this.props)
    }
    guanli(id) {
        this.props.seter(id)
        let { list } = this.state
        this.setState({
            list: this.props.getseter
        })

    }
}
let qu = (state) => {
    return {
        getseter: state.Seting
    }
}
let cun = (dispatch) => {
    return {
        seter(data) {
            dispatch({ type: "SETING", data })
        }
    }
}
export default connect(qu, cun)(withRouter(Suoyou))