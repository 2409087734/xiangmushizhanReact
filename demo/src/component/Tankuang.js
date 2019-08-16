import React, { Component } from 'react'
import {get,post} from "../Axios"
 class Tankuang extends Component {
     constructor(props){
         super()
         let {data}=props
         this.state={
            userId: data.userId,
            address:data.address,
            realName:data.realName,
            password:data.password,
            phoneNum:data.phoneNum,
            userType:data.userType,
            userIcon:data.userIcon
          }
     }
  
    render() {
        console.log(this.props)
        let {userId,address,realName,password,phoneNum,userType,userIcon}=this.state
        console.log(userId)
      
        return (
            <div className="tankuang">
                <li><span>userId:</span><input type="text" value={userId} name="userId" onChange={this.change.bind(this)}/></li>
                <li><span>address:</span><input type="text" value={address} name="address" onChange={this.change.bind(this)}/></li>
                <li><span>realName:</span><input type="text" value={realName} name="realName" onChange={this.change.bind(this)}/></li>
                <li><span>password:</span><input type="text" value={password} name="password" onChange={this.change.bind(this)}/></li>
                <li><span>phoneNum:</span><input type="text" value={phoneNum} name="phoneNum" onChange={this.change.bind(this)}/></li>
                <li><span>userType:</span><input type="text" value={userType} name="userType" onChange={this.change.bind(this)}/></li>
                <li><span>userIcon:</span><input type="text" value={userIcon} name="userIcon" onChange={this.change.bind(this)}/></li>
                <button onClick={this.queding.bind(this)}>确定</button><button onClick={this.quxiao.bind(this)}>取消</button>
            </div>
        )
    }
    change(e){
        
        let names=e.target.name;
        this.setState({
            [names]:e.target.value
        })
    }
    quxiao(){
        console.log(this.props)
        this.props.fuchuanzi(false)
    }
    queding(){
        
        this.shujuxuanran(false)
        setTimeout(()=>{ get("/user").then(res=>{
          
            console.log(res.data)
            this.props.shuju(res.data)
            
        })},100)
       
        
    }
    shujuxuanran(isfalse){
        let {userId,address,realName,password,phoneNum,userType,userIcon}=this.state
        post("/user/update",{userId,address,realName,password,phoneNum,userType,userIcon}).then(res=>{
            console.log(res)
            if(res.data.code)
            {

                
                 this.props.fuchuanzi(isfalse)
            }
           
            
        })
    }
    componentDidMount(){
        this.shujuxuanran(true)
       
    }
}

export default Tankuang
