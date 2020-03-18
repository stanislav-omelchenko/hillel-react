import axios from "axios";

export default {
  waiters: axios.create({
    baseURL: "http://5e6acd800f70dd001643c03c.mockapi.io/waiters",
    headers: { "Content-Type": "application/json" }
  }),
  tables: axios.create({
    baseURL: "http://5e6acd800f70dd001643c03c.mockapi.io/tables",
    headers: { "Content-Type": "application/json" }
  })
};
