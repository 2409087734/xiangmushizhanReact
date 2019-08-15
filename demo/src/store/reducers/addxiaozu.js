let addxiaozu=(state=[],action)=>{
    switch(action.type){
        case "ADDXIAOZU":
        state.push(action.data)
        return JSON.parse(JSON.stringify(state))
        default :return state
    }
}

export default addxiaozu