import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

const returnBookURL = BACKEND_BASE_URL + "RecordReturnServlet";

export const returnBook = (recordId) => {
    return axios({
        url: returnBookURL,
        method: 'GET',
        params: {
            recordId: recordId
        }
    });
}
