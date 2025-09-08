import axios from "axios";
const API_URL = "http://localhost:3000/auth";
const loginService = {
  login: async (credentials) => {
    return axios
      .post(`${API_URL}/login`, JSON.stringify(credentials), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Important: This sends cookies with the request
      })
      .then((response) => {
        //console.log(response.data);
        return response.data;
      });
    // with out catch , axios handle the error by it self
  },
  logout: async () => {
    return axios
      .post(
        `${API_URL}/logout`,
        {},
        {
          withCredentials: true, // Important: This sends the cookie for authentication
        }
      )
      .then((response) => {
        return response.data;
      });
  },

  create: async (userData) => {
    console.log("Registering user:", userData);
    return axios
      .post(`${API_URL}/register`, JSON.stringify(userData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Important: This sends cookies with the request
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default loginService;

/**
 * import axios from "axios";
const API_URL = "http://localhost:3000/auth";

const loginService = {
  login: async (credentials) => {
    return axios
      .post(`${API_URL}/login`, JSON.stringify(credentials), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Important: This sends cookies with the request
      })
      .then((response) => {
        //console.log(response.data);
        return response.data;
      });
    // with out catch , axios handle the error by it self
  },

  logout: async () => {
    return axios
      .post(`${API_URL}/logout`, {}, {
        withCredentials: true, // Important: This sends the cookie for authentication
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default loginService;
*/

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
