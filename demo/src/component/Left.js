import { Menu, Icon, Button ,Input} from 'antd';
import React from "react"
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom"
import {get} from "../Axios"
const { SubMenu } = Menu;

class Left extends React.Component {
  state = {
    collapsed: false,
    sousuo:""
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let {sousuo}=this.state
    return (
      <div style={{ width: 256 }} className="content-left">
        <Input type="text" value={sousuo} onInput={this.sousuoyonghu.bind(this)} name="sousuo" placeholder="请输入要搜索的用户"/><Button className="sousuobtn" onClick={this.sousuoyonghubtn.bind(this)}>搜索</Button><br/>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
   
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="5"><NavLink to="/suoyou">所有用户</NavLink></Menu.Item>
     
            
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>小组管理</span>
              </span>
            }
          >
            <Menu.Item key="9"><NavLink to="/xiaozu">小组列表</NavLink></Menu.Item>
            <Menu.Item key="10"><NavLink to="/chengyuan">成员管理</NavLink></Menu.Item>
          
          </SubMenu>
        </Menu>
      </div>
    );
  }
  sousuoyonghu(e){
    let {sousuo}=this.state
    let names=e.target.name;
    this.setState({
      [names]:e.target.value
    })
    console.log(e.target.value)
    if(e.target.value==""){
      console.log(123)
      get("/user").then(res => {
        
        this.props.sousuocuancan(res.data.result)
    

})
    }
  }
  sousuoyonghubtn(){
    let {sousuo}=this.state
   
      get(`/user/search?input=${sousuo}`).then(res=>{
        this.props.sousuocuancan(res.data.result)
        
      })
    
    
   
    }
   
  
}

export default Left