import {createStore,combineReducers} from "redux"
import Seting from "./reducers/seting"
import Addxiaozu from "./reducers/addxiaozu"
let hebing=combineReducers({
    Seting,
    Addxiaozu
})

let store=createStore(hebing)
export default store