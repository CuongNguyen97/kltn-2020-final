import axios from "axios";
export const API_HOST = "https://api-dot-storied-channel-275715.et.r.appspot.com/api";
export class BaseService {
    get = (url, params) => {
        return axios.get(API_HOST + url, {
            params: params,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
        }).then(result => result.data);
    }

    post = (url, data) => {
        return axios.post(API_HOST + url, data, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
        }).then(result => result.data);
    }

    put = (url, data) => {
        return axios.put(API_HOST + url, data, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
        }).then(result => result.data);
    }

    delete = (url, params) => {
        return axios.delete(API_HOST + url, {
            params: params,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
              }
        }).then(result => result.data);
    }

    postWithoutToken = (url, data) => {
        return axios.post(API_HOST + url, data).then(result => result.data);
    }
}