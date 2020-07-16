import React, { Component } from 'react';
import { Input } from 'antd';
import { BaseService } from '../../service/BaseService';

class ChangeProfile extends Component {


    onSave = () => {

        const params = {
            id: this.props.data.id,
            username: this.props.data.username,
            fullName: this.refName.state.value,
            email: this.refEmail.state.value,
            phone: this.refPhone.state.value,
        }

        this.baseService = new BaseService
        this.baseService.put('/user', params).then((res) => {
            if (res){
                this.props.handleCancel()
                this.props.reloadData()
            }
            console.log("User -> getData -> res", res)
        });
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <div style={{ display: "flex", paddingBottom: 10,marginLeft: 10 }}>
                    <span style={{width: 100}}>Tên: </span>
                    <Input ref={c => this.refName = c} defaultValue={data.fullName} />
                </div>
                <div style={{ display: "flex" , paddingBottom: 10,marginLeft: 10}}>
                    <span  style={{width: 100}}>Email: </span>
                    <Input ref={c => this.refEmail = c} defaultValue={data.email} />
                </div>
                <div style={{ display: "flex",marginLeft: 10 }}>
                    <span  style={{width: 100}}>Số điện thoại: </span>
                    <Input ref={c => this.refPhone = c} defaultValue={data.phone} />
                </div>

                <div style={{display: "flex", justifyContent: "center", paddingTop: 15, paddingBottom: 15}}>
                    <button className="btn btn-success"  style = {{cursor: 'pointer',marginLeft:50 }} onClick={() => this.onSave()}>
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

export default ChangeProfile;