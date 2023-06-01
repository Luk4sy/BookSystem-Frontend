import axios from "axios";
import { BACKEND_BASE_URL } from "./config";


const url = BACKEND_BASE_URL + 'xxxxServlet'
export const login =(data) =>{
   return axios({
        url,
        method:'POST',
        data
    })
}