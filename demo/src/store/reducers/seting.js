let seting=(state=[],action)=>{
    switch(action.type){
        case "SETING":
        state.push(action.data)
        return JSON.parse(JSON.stringify(state))
        default :return state
    }
}

export default seting