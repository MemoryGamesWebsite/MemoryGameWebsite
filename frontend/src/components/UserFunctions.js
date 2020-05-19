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
export const result = (newResult) => {
  return axios
    .post("results/rez", {
      result: newResult.result,
      email: newResult.email,
      full_name: newResult.full_name,
    })
    .then((response) => {
      console.log("Time Registered");
    });
};

export const result2 = (newResult) => {
  return axios
    .post("results2/rez2", {
      level: newResult.level,
      email: newResult.email,
      full_name: newResult.full_name,
    })
    .then((response) => {
      console.log("Time Registered");
    });
};

export const result3 = (newResult) => {
  return axios
    .post("results3/rez3", {
      result: newResult.result,
      email: newResult.email,
      full_name: newResult.full_name,
    })
    .then((response) => {
      console.log("Time Registered");
    });
};
