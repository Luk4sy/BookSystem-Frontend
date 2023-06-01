import axios from "axios"

export const menuList =() =>{
    const url ="http://big-event-vue-api-t.itheima.net/my/menus"
    return axios({
        url
    })
}