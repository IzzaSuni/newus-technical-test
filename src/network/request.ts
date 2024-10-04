import axios, { AxiosRequestConfig } from "axios";

export default function request<TRes>(config: AxiosRequestConfig) {
  return axios
    .request<TRes>(config)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
