import { Menu, Icon, Button } from 'antd';
import React from "react"
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom"
const { SubMenu } = Menu;

class Left extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }} className="content-left">
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
}

export default Left