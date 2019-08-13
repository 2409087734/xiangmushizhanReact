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
                <li>账户:<input type="text" value={userName} onChange={this.changevalue.bind(this)} placeholder="字符串类型" name="userName"/></li>
                <li>密码:<input type="text" value={password} onChange={this.changevalue.bind(this)} placeholder="字符串类型" name="password"/></li>
                <li>真实姓名:<input type="text" value={realName} onChange={this.changevalue.bind(this)} placeholder="字符串类型" name="realName"/></li>
                <li>用户权限:<input type="text" value={userType} onChange={this.changevalue.bind(this)} placeholder="1 管理员 2: 组长 3: 普通 number类型" name="userType"/></li>
                <li>电话:<input type="text" value={phoneNum} onChange={this.changevalue.bind(this)} placeholder="字符串类型" name="phoneNum"/></li>
                <li>用户头像:<input type="text" value={userIcon} onChange={this.changevalue.bind(this)} placeholder="照片路径" name="userIcon"/></li>
                <li>用户地址:<input type="text" value={address} onChange={this.changevalue.bind(this)} placeholder="字符串类型" name="address"/></li>
                <li><button onClick={this.handleZc.bind(this)}>注册</button></li>
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
