import Denglu from "../Views/Denglu"
import Zhuce from "../Views/Zhuche"
import Suoyou from "../Views/Suoyou"
import Chengyuan from "../Views/Chengyuan"
import Xiaozu from "../Views/Xiaozu"
import Xiangqing from "../component/Xiangqing"
let router=[
    {
        path:"/denglu",
        component:Denglu
    },
    {
        path:"/zhuce",
        component:Zhuce
    },
    {
        path:"/suoyou",
        component:Suoyou
    },{
        path:"/chengyuan",
        component:Chengyuan
    },{
        path:"/xiaozu",
        component:Xiaozu
    },
    {
        path:"/xiangqing",
        component:Xiangqing
    },
    {
        path:"/",
        redirect:"/suoyou"
    },
]

export default router