
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import {get,post} from "../Axios"
import { Button, Modal, Form, Input, Radio ,Select} from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    state={
      groupName:"",
      groupPersonNum:10,
      leaderUserName:"",
      groupIcon:""
    }
  
    render() {
      console.log(this.state.groupName)
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      let {groupName,groupPersonNum,groupIcon,leaderUserName}=this.state;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="确定"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="groupName">
              {getFieldDecorator('groupName', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input onChange={this.change.bind(this)} name="groupName" type="text" value={groupName}/>)}
            </Form.Item>
            <Form.Item label="groupPersonNum">
              {getFieldDecorator('groupPersonNum', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input onChange={this.change.bind(this)} name="groupPersonNum" type="" value={10}/>)}
            </Form.Item>
            <Form.Item label="leaderUserName">
              {getFieldDecorator('leaderUserName', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input onChange={this.change.bind(this)} name="leaderUserName" type="text" value={leaderUserName}/>)}
            </Form.Item>
            <Form.Item label="groupIcon">
              {getFieldDecorator('groupIcon', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input onChange={this.change.bind(this)} name="groupIcon" type="text" value={groupIcon}/>)}
            </Form.Item>
          
           
          </Form>
        </Modal>
      );
    }
    change(e){
      let names=e.target.name;
      console.log(e.target.name)
      this.setState({
        [names]:e.target.value
      })
      
    }
  },
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    // alert(123)
    this.setState({ visible: true });
  };

  handleCancel = () => {
    // alert(1234)取消键
    this.setState({ visible: false });
  };

  handleCreate = () => {
    // alert(12345)确定键
    
    console.log(this.formRef.props)
 


    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      let shuju=values
      let {groupName,groupPersonNum,groupIcon,leaderUserName}=shuju;
      console.log({groupName,groupPersonNum,groupIcon,leaderUserName})
      post("/group/add",{groupName,groupPersonNum,leaderUserName}).then(res=>{
        console.log(res)
      })
      form.resetFields();

      this.setState({ visible: false });
    });

  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} className="addbtn">
          +新建小组
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          
        />
         {/* <Select style={{ width: 70 }}>
        <option value="86">+86</option>
        <option value="87">+87</option>
      </Select>, */}
      </div>
    );
  }
}

// ReactDOM.render(<CollectionsPage />, document.getElementById('container'));
export default CollectionsPage
          