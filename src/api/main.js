import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

const fetchBooksURL = BACKEND_BASE_URL + 'BookShowServlet';
const updateBookStatusURL = BACKEND_BASE_URL + 'BookStatusServlet';

export const fetchBooks = () => {
    return axios({
        url:fetchBooksURL,
        method:'GET',
        withCredentials: true,
    })
};

export const updateBookStatus = (id, status) => {
    return axios({
        url: updateBookStatusURL,
        method: 'POST',
        data: {
            id,
            status
        }
    });
};