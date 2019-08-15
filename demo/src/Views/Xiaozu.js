import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import Guanli from "../Views/Guanli"
import {connect} from "react-redux"
import Addxiaozu from "../component/Addxiaozu"
class Xiaozu extends React.Component{
    constructor(props){
        super()
        this.state={
            isfalse:false
        }
    
    }
    render(){
        let {isfalse}=this.state
        return  <div className="yemian">
        <Header title="小组"/>
        <div className="content">
        <Left/>
        <div className="content-right">
            <div className="xiaozulist">

            </div>
            <div className="guanli-box">
                <div className="addxiaozu-box">
                    {/* <button onClick={this.addxiaozu.bind(this)}>+添加小组</button> */}
                    <Addxiaozu/>
                </div>
                <Guanli/>
            </div>
            {
                
            }
        </div>
         
        </div>
        
         </div>
    }
    addxiaozu(){

        // this.props.add()
        let {isfalse}=this.state;
        this.setState({
            isfalse:true
        })
    }
}
let qu=(state)=>{
    return{
        // getseter:state.Seting
    }
}
let cun=(dispatch)=>{
    return{
        add(data){
            dispatch({type:"ADDXIAOZU",data})
        }
    }
}
export default connect()(Xiaozu)