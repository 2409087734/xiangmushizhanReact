import React from "react"
import Header from "../component/Header"
import Left from "../component/Left"
class Chengyuan extends React.Component{
    constructor(props){
        super()
    
    }
    render(){
        return  <div className="yemian">
        <Header title="成员"/>
        <div className="content">
        <Left/>
        <div className="content-right">
        成员页面
        </div>
         
        </div>
        
         </div>
    }
}
export default Chengyuan