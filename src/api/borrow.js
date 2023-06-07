import axios from "axios";
import { BACKEND_BASE_URL } from "./config";
const returnBookURL = BACKEND_BASE_URL + "RecordAddServlet";

export const borrowBook = () => {
    return axios({
        url: returnBookURL,
        method: 'GET',
    });
}

