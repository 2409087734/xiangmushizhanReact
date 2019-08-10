import React,{Component} from "react"
import {post,get} from "../Axios"
import {withRouter} from "react-router-dom"
 class Zhu extends Component{
    state = {
       userName:"",
       password:"",
       realName:"",
       userType:"",
       phoneNum:"",
       userIcon:"",
       address:""
    }
    render(){
        let {userName,password,realName,userType,phoneNum,userIcon,address} = this.state;
        return(
            <div>
                <input type="text" value={userName} onChange={this.changevalue.bind(this)} name="userName"/>
                <input type="text" value={password} onChange={this.changevalue.bind(this)} name="password"/>
                <input type="text" value={realName} onChange={this.changevalue.bind(this)} name="realName"/>
                <input type="text" value={userType} onChange={this.changevalue.bind(this)} name="userType"/>
                <input type="text" value={phoneNum} onChange={this.changevalue.bind(this)} name="phoneNum"/>
                <input type="text" value={userIcon} onChange={this.changevalue.bind(this)} name="userIcon"/>
                <input type="text" value={address} onChange={this.changevalue.bind(this)} name="address"/>
                <button onClick={this.handleZc.bind(this)}>注册</button>
            </div>
        )
    }
    changevalue(e){
        let {userName,password,realName,userType,phoneNum,userIcon,address} = this.state;
        let names=e.target.name;
        this.setState({
            [names]:e.target.value
        })
    }
    handleZc(){
        let {userName,password,realName,userType,phoneNum,userIcon,address} = this.state;
        post('/register',{userName,password,realName,userType,phoneNum,userIcon,address}).then(res =>{
            // console.log(res.data)
            if(res.data.code === 1){
                this.props.history.push('/denglu')
            }
        })
    }
}

export default withRouter(Zhu)
