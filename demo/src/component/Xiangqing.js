import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
 class Xiangqing extends Component {
    render() {
        let {state}=this.props.location
        console.log(state)
        return (
            <div className="xiangqing">
                <li><img src={state.userIcon}/></li>
                <li>{state.userName}</li>
                <li>{state.password}</li>
                <li>{state.phoneNum}</li>
                <li>{state.userId}</li>
                <li>{state.userType}</li>
                <li>{state.userIcon}</li>
                
            </div>
        )
    }
}
export default withRouter(Xiangqing)