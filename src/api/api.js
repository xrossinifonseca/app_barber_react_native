import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-barber-app.herokuapp.com/",
});

export const getServices = async () => {
  return api.get("services");
};
