import axios from "axios";
import { BACKEND_BASE_URL } from "./config";

const returnBookURL = BACKEND_BASE_URL + "BookAddServlet";

export const addNewBook = (book) => {
  return axios({
    url: returnBookURL,
    method: "POST",
    data: book,
  });
};
