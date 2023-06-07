import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

const fetchAllRecordURL = BACKEND_BASE_URL + "RecordShowServlet";

export const fetchAllRecord = () => {
    return axios({
        url:fetchAllRecordURL,
        method:'GET',
    })
}