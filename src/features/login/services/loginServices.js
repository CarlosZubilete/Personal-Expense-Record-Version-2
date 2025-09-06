import axios from "axios";
const API_URL = "http://localhost:3000/auth"; // Replace with your backend URL
const loginService = {
  login: async (credentials) => {
    return axios
      .post(`${API_URL}/login`, JSON.stringify(credentials), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        //console.log(response.data);
        return response.data;
      });
    // with out catch , axios handle the error by it self
    // .catch((error) => {
    //   // console.log(error.response.data);
    //   return error.response.data;
    // });
  },
};

export default loginService;

/* 
  .catch ->  ]200 - 299[
  401
"ok": false,
  "message": "Invalid credentials"
*/
/* 
  then ->  [200 - 299]
  200
  "ok": true,
  "username": "return username",
*/
