import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
function View(props){
        console.log(props)
        let {router}=props;
        let comp=router.filter(item=>item.component);
        let redi=router.filter(item=>item.redirect);
    return<Switch>
                {
                    comp.map((item,index)=><Route key={index} path={item.path} render={()=>{return <item.component></item.component>}}></Route>).concat(redi.map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}></Redirect>))
                }
          </Switch>
}

export default View