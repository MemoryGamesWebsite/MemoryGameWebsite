import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      full_name: newUser.full_name,
      password: newUser.password,
      email: newUser.email,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (user) => {
  return axios
    .get("users/profile", {
      //headers: { Authorization: ` ${this.getToken()}` },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};