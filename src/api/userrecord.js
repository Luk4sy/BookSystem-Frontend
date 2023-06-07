import axios from "axios";
import { BACKEND_BASE_URL } from "./config";


const fetchUserRecordURL = BACKEND_BASE_URL + "RecordUserServlet";

export const fetchUserRecord = () => {
    return axios({
        url:fetchUserRecordURL,
        method:'GET', 
        withCredentials: true
    })
}

