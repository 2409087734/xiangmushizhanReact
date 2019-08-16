import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import Guanli from "../Views/Guanli"
import { connect } from "react-redux"
import { Card, Col, Row } from 'antd';
import Addxiaozu from "../component/Addxiaozu"
import { get, post } from "../Axios"
class Xiaozu extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isfalse: false,
            list: [],
            a: ""
        }

    }
    render() {
        let { isfalse, list } = this.state
        return <div className="yemian">
            <Header title="小组" />
            <div className="content">
                <Left />
                <div className="content-right">
                    <div className="xiaozulist">
                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Row gutter={16} className="xiaozulist">
                                <div className="xiaozulist-content">
                                    {
                                        list && list.map((item, index) => <Col span={8}>
                                            <Card title="Card title" bordered={false}>
                                                <span className="xiaozu-img-box"><img src={item.groupIcon}/></span>
                                                {
                                                    item.groupName
                                                }
                                                <i className="bianji">编辑</i>
                                                <i className="deleat" onClick={this.deleats.bind(this, item)}>删除</i>

                                            </Card>
                                        </Col>)
                                    }
                                </div>




                            </Row>


                        </div>
                    </div>
                    <div className="guanli-box">
                        <div className="addxiaozu-box">

                            <Addxiaozu xiaozuzichuanfu={(res) => {  this.setState({ list: res }) }} />
                        </div>

                    </div>
                    {

                    }
                </div>

            </div>

        </div>
    }
    addxiaozu() {

        let { isfalse } = this.state;
        this.setState({
            isfalse: true
        })
    }
    deleats(item) {
        console.log(item.groupId)
        post("/group/delete", { groupId: item.groupId }).then(res => {
            if (res.data.code) {
                // // this.forceUpdate();
                let { a ,list} = this.state
                // this.setState({
                //     a: "b"
                // })
                get("/group/list").then(res=>{
      
                    
                    this.setState({
                    list: res.data.result
                })
                  })
            }
        })

    }
}
// let qu = (state) => {
//     return {
//         // getseter:state.Seting
//     }
// }
// let cun = (dispatch) => {
//     return {
//         add(data) {
//             dispatch({ type: "ADDXIAOZU", data })
//         }
//     }
// }
export default Xiaozu