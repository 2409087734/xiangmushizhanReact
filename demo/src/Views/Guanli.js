
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { List, Avatar, Button, Skeleton } from 'antd';
import {connect} from "react-redux"
import reqwest from 'reqwest';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
      
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        
      });
      console.log(res.results)
    });
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

//   onLoadMore = () => {
//     this.setState({
//       loading: true,
//       list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
//     });
//     this.getData(res => {
//       const data = this.state.data.concat(res.results);
//       this.setState(
//         {
//           data,
//           list: data,
//           loading: false,
//         },
//         () => {
//           // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
//           // In real scene, you can using public method of react-virtualized:
//           // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//           window.dispatchEvent(new Event('resize'));
//         },
//       );
//     });
//   };

  render() {
    const { initLoading, loading, list } = this.state;
    console.log(this.props)
    // let {list}=this.props
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          {/* <Button onClick={this.onLoadMore}>loading more</Button> */}
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={this.props.list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.userIcon} />
                }
                // title={<a href="https://ant.design">{item.name}</a>}
                description={item.phoneNum}
               title={item.userName}
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
  componentWillReceiveProps(){
      let {list}=this.props
      // console.log(this.props.getseter)
      // console.log(list)
      // this.setState({
      //     list:this.props.getseter
      // })
  }
}

// ReactDOM.render(<LoadMoreList />, document.getElementById('container'));
// let qu=(state)=>{
//     return{
        
//     }
// } 
// let cun=(dispatch)=>{
//     return{
        
//     }
// }
export default LoadMoreList
          