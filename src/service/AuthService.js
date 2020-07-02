import axios from "axios";
import { BaseService, API_HOST } from "./BaseService";
import { message } from "antd";

export class AuthService extends BaseService {
    register = (user) => {
        return this.postWithoutToken("/user/register", user).then(data => {
            console.log(data);
            if (data) {
                console.log(data)
                message.success('This is a success message');
                alert("Tao tai khoan thanh cong")
            }
        })
    }



    login = (username, password) => {
        return axios.post(API_HOST + "/auth/login", {
          username: username,
          password: password
        }).then(result => {
            if (result.data)
            localStorage.setItem("token", result.data);

            return true
        }).catch((error) => {
            console.log(error.toJSON());
          });
    }
}