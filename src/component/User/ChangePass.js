import React, { Component } from 'react';
import { Input } from 'antd';
import { BaseService } from '../../service/BaseService';
import { message } from 'antd';


class ChangePass extends Component {
    constructor(props) {
        super(props);
        this.state={
            password1: null,
            password2: null,
            oldPassword: null
        }
    }
    

    onSave = () => {
        if (this.state.password1 != this.state.password2){
            message.error('Mật khẩu nhập lại không khớp, vui lòng kiểm tra lại!');
        } else {
            const params = {
                username: this.props.data.username,
                newPassword: this.state.password1,
                oldPassword: this.state.oldPassword,
            }
        
            this.baseService = new BaseService
            this.baseService.put('/user/password', params).then((res) => {
                if (res) {
                    message.success('Thay đổi mật khẩu thành công');
                    this.props.handleCancel()
                    this.props.reloadData()
                }
                console.log("User -> getData -> res", res)
            });
        }
        
    }
    render() {
        const {data} = this.props
        return (
            <div>
                <div style={{ display: "flex", paddingBottom: 10,marginLeft: 10 }}>
                    <span style={{width: 100}}>Mật khẩu cũ: </span>
                    <Input.Password ref={c => this.refOldPassword = c} onChange={e => this.setState({ oldPassword: e.target.value })}/>
                </div>
                <div style={{ display: "flex" , paddingBottom: 10,marginLeft: 10}}>
                    <span  style={{width: 100}}>Mật khẩu mới: </span>
                    <Input.Password ref={c => this.refNewPassword = c}  onChange={e => this.setState({ password1: e.target.value })} />
                </div>
                <div style={{ display: "flex",marginLeft: 10 }}>
                    <span  style={{width: 100}}>Xác nhận mật khẩu: </span>
                    <Input.Password ref={c => this.refNewPassword2 = c}  onChange={e => this.setState({ password2: e.target.value })}/>
                </div>

                <div style={{ display: "flex", justifyContent: "center", paddingTop: 15, paddingBottom: 15 }}>
                    <button className="btn btn-success"  onClick={() => this.onSave()}>
                        Lưu
                    </button>
                    <button className="btn btn-danger" style = {{cursor: 'pointer',marginLeft:50 }} onClick={() => this.props.handleCancel()}>
                        Hủy
                    </button>
                </div>
            </div>
        );
    }
}

export default ChangePass;