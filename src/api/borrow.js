import axios from "axios";
import { BACKEND_BASE_URL } from "./config";
const borrowBookURL = BACKEND_BASE_URL + "RecordAddServlet";

export const borrowBook = (bookId, date) => {
  return axios({
    url: borrowBookURL,
    method: "POST",
    data: {
      bookId: bookId,
      date: date,
    },
    withCredentials: true,
  });
};
