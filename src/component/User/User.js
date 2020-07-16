import React, { Component } from 'react';
import { BaseService } from '../../service/BaseService';
import { Modal, Button } from 'antd';
import ChangeProfile from './ChangeProfile';
import ChangePass from './ChangePass';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            visible: false,
            visiblePassword: false
        }

    }


    getData = () => {
        this.baseService = new BaseService
        this.baseService.get('/user/me').then((res) => {
            console.log("User -> getData -> res", res)
            this.setState({
                data: res,
            });
        });
    }

    componentDidMount() {
        this.getData();

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    showModalPassword = () => {
        this.setState({
            visiblePassword: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancelPassword = e => {
        console.log(e);
        this.setState({
            visiblePassword: false,
        });
    };

    render() {
        return (
            <div>
                <div className="half left-arrow d-flex align-items-center">
                    <div className="text p-5 p-xl-5 text-left">
                        <p className="star mb-0"><span className="fa fa-user" style = {{fontSize: 40,marginLeft: 150}}></span></p>
                        <ul className="list-accomodation">
                            <li style = {{fontSize: 30}}><span style = {{fontSize: 30}}>UserName :</span> {this.state.data.username}</li>
                            <li style = {{fontSize: 30 }}><span style = {{fontSize: 30}}>FullName : </span>{this.state.data.fullName} </li>
                            <li style = {{fontSize: 30}}><span style = {{fontSize: 30}}>Email : </span> {this.state.data.email}</li>
                            <li style = {{fontSize: 30}}><span style = {{fontSize: 30}} >Phone : </span>{this.state.data.phone}</li>
                        </ul>
                    </div>

                </div>
                <button onClick={() => this.showModal()} className="pa-5" style={{ cursor: 'pointer',fontSize:20,backgroundColor:'#04B4AE',color:"white",borderWidth:"0px" ,borderRadius:5,marginLeft: 80 }} className="block-27">
                    Chỉnh sửa
                                </button>

                                <button onClick={() => this.showModalPassword()} className="pa-5" style={{ cursor: 'pointer',fontSize:20,backgroundColor:'#04B4AE',color:"white",borderWidth:"0px" ,borderRadius:5,marginLeft: 60 }} className="block-27">
                    Đổi mật khẩu
                                </button>
                <Modal
                    title="Chỉnh sửa thông tin"
                    visible={this.state.visible}
                    footer={null}
                    
                >
                    <ChangeProfile style = {{marginLeft: 100}} data={this.state.data} handleCancel={() => this.handleCancel()} reloadData={() => this.getData()}/>
                </Modal>
                <Modal
                    title="Thay đổi mật khẩu"
                    visible={this.state.visiblePassword}
                    footer={null}
                >
                    <ChangePass  data={this.state.data} handleCancel={() => this.handleCancelPassword()} reloadData={() => this.getData()}/>
                </Modal>
            </div>
        );
    }
}

export default User;