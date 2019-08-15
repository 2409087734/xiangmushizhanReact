import React from "react"
class Header extends React.Component{
    constructor(props){
        super()
        this.state={
            title:"标题",
            you:"左方",
            zuo:"<"
        }
    }
    render(){
        console.log(this.props)
        
        let {title,you,zuo}=this.state
        return<div className="header">
           {this.props.title!=title?<span>{this.props.title+"页面"}</span>:<span>{title}</span>}
        </div>
    }
}
export default Header