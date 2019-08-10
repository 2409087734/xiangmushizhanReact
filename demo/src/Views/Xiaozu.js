import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
class Xiaozu extends React.Component{
    constructor(props){
        super()
    
    }
    render(){
        return  <div className="yemian">
        <Header title="小组"/>
        <div className="content">
        <Left/>
        <div className="content-right">
        小组页面
        </div>
         
        </div>
        
         </div>
    }
}
export default Xiaozu