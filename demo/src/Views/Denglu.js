import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
import {get,post} from "../Axios"
import {withRouter} from "react-router-dom"
class Denglu extends React.Component{
    constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
    }
    render(){
        let {userName,password}=this.state
        return<div className="yemian">
            <Header title="登录"/>
            <div className="content">
            <Left/>
            <div className="content-right">
            <li><span>账户:</span><input type="text" value={userName} onChange={this.change.bind(this)} name="userName"/></li>
            <li><span>账户:</span><input type="text" value={password} onChange={this.change.bind(this)} name="password"/></li>
            <button onClick={this.denglu.bind(this)}>登录</button>
            </div>
             
            </div>
            
             </div>
    }
    change(e){
        let {userName,password}=this.state
        let names=e.target.name
        this.setState({
            [names]:e.target.value
        })
    }
    denglu(){
        let {userName,password}=this.state
        post("/login",{userName,password}).then((res)=>{
          
            if(res.data.code)
            {
                window.localStorage.setItem("token",res.data.token)
                this.props.history.push("/suoyou")
                
            }
        })
    }
}

export default withRouter(Denglu)