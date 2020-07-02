import { Tabs, notification, message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import backgroundImg from './images/background-ss1.jpg'
import './style.scss';
import _ from 'lodash'
import { API_URL } from '../../helper/variables'
import { AuthService } from '../../service';
    
const { TabPane } = Tabs;


export default class formLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: '',
            password: '',
            phoneNumber: '',
            password2: '',
            login: 'Đăng nhập',
            error: false
        }
        this.onSubmit = this.onSubmit.bind(this);

        this.authService = new AuthService();
    }

    componentClicked = () => console.log('clicked');
    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;


        } else {
            fbContent = (<FacebookLogin
                appId="277180010115743"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />
            );
        }
        return <div>{fbContent}</div>
    }

    componentClicked() {
        console.log('clicked')
    }
    responseFacebook(response) {
     
    }

    responseGoogle(response) {
       
    }

    onSubmit(e) {
        const data = {
            username: this.state.email,
            password: this.state.password,
        }

        this.authService.login(data.username, data.password);

        axios.post(`${API_URL}/auth/login`, data).then(response => {
            localStorage.setItem("token", response.data);
        }).then(()=>{
            window.location.href = "/";
        }).catch(error => {
            console.log("TCL: formLogin -> onSubmit -> error", error)
        });
    }

    createAccount() {
        message.info("Creating account!")
        if (this.state.name && this.state.name && this.state.email && this.state.password) {
            if (this.state.password !== this.state.password2) {
                notification['error']({
                    message: 'Mật khẩu 2 không khớp!'
                });
            } else {

                this.authService.register({
                    username: this.state.email,
                    email: this.state.email,
                    password: this.state.password,
                    phone: this.state.phoneNumber,
                    email: this.state.email,
                    fullName: this.state.name,
                }
                );
            //     axios.post('http://localhost:3000/v1/account', {
            //         email: this.state.email,
            //         password: this.state.password,
            //         name: this.state.name,
            //     }).then(response => {
            //         if (response.data.success) {
            //             const data = response.data.result
            //             this.onClose()
            //             this.props.userVisible && this.props.userVisible()
            //             this.props.getName && this.props.getName(!_.isEmpty(data.name) ? data.name : '')
            //             this.props.getEmail && this.props.getEmail(data.email)
            //         } else {
            //             notification['error']({
            //                 message: response.data.message,
            //             });
            //         }
            //     }).catch(error => {
            //     });
             }
        } else {
            this.setState({
                error: true
            })
        }
    }

    onChange(val, field) {
        if (field === 'name') {
            this.setState({ name: val.target.value })
        } else if (field === 'email') {
            this.setState({ email: val.target.value })

        } else if (field === 'phoneNumber') {
            this.setState({ phoneNumber: val.target.value })

        } else if (field === 'password') {
            this.setState({ password: val.target.value })

        } else if (field === 'password2') {
            this.setState({ password2: val.target.value })

        }

    }

    onClose() {
        this.props.onCloseModal && this.props.onCloseModal()
    }

    callback(key) {
        console.log("TCL: formLogin -> callback -> key", key)
        if (key == 1) {
            this.setState({
                login: 'Đăng nhập'
            })
        } else {
            this.setState({
                login: 'Tạo tài khoản'
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        let fbContent;
        let googleContent;
        if (this.state.isLoggedIn) {
            fbContent = null
            googleContent = null
        } else {
            fbContent = (<FacebookLogin
                appId="430163910969334"
                fields="name,email,picture"
                onClick={this.componentClicked}
                onClose={() => this.onClose()}
                userVisible={this.props.userVisible}
                getName={this.props.getName}
                getEmail={this.props.getEmail}
                getAvatar={this.props.getAvatar}
                callback={this.responseFacebook}
            />)
            googleContent = (< GoogleLogin
                clientId="66330207844-23svcr4j2tptb8nc2e0o1j2q7i5v7rde.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                onClose={() => this.onClose()}
                userVisible={this.props.userVisible}
                getName={this.props.getName}
                getEmail={this.props.getEmail}
                getAvatar={this.props.getAvatar}
                callback={this.responseFacebook}
                cookiePolicy={'single_host_origin'}
            />)
        }
        return (
            <div style={{
                position: 'absolute',
                top: '0px',
                zIndex: 900000
            }}>
                <div className='row  form-custom-input'>
                    <div className="col-md-6">

                        <img style={{ width: '240%', height: '100%' }} src={backgroundImg} />
                        <div className='background-login-form'></div>
                    </div>
                    <div className="col-md-4" >
                        <Tabs defaultActiveKey="1" onChange={(val) => this.callback(val)}>
                            <TabPane tab="Đăng nhập" key="1">
                                <input placeholder="Email đăng nhập" type="text" required="" value={this.state.email} onChange={(e) => this.onChange(e, 'email')} />
                                <input placeholder="Mật khẩu" type="password" required="" value={this.state.password} onChange={(e) => this.onChange(e, 'password')} />
                                <div style={{ display: 'flex' }}>
                                    {fbContent}
                                    <span className='google-login-btn'>{googleContent}</span>
                                </div>
                                <div style={{ display: 'flex', paddingLeft: '25px', paddingTop: '20px' }}>
                                    <div className='btn-group' >
                                        <button onClick={() => this.onSubmit()} className='btn btn-primary' > Đăng nhập </button>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Tạo tài khoản" key="2" onChange={(val) => this.callback(val)}>
                                <input placeholder="Tên" type="text" required="" value={this.state.name} onChange={(e) => this.onChange(e, 'name')} />
                                <input placeholder="SĐT" type="text" required="" value={this.state.phoneNumber} onChange={(e) => this.onChange(e, 'phoneNumber')} />
                                <input placeholder="Email đăng nhập" type="text" required="" value={this.state.email} onChange={(e) => this.onChange(e, 'email')} />
                                <input placeholder="Mật khẩu" type="password" required="" value={this.state.password} onChange={(e) => this.onChange(e, 'password')} />
                                <input placeholder="Xác nhận mật khẩu" type="password" required="" value={this.state.password2} onChange={(e) => this.onChange(e, 'password2')} />
                                {this.state.error ? <div style={{ fontSize: 12, color: 'red', paddingLeft: '25px', paddingTop: '20px' }}>Bạn chưa nhập đầy đủ thông tin</div> : ''}
                                <div style={{
                                    display: 'flex', paddingLeft: '25px', paddingTop: '10px'
                                }}>
                                    <div className='btn-group' >
                                        <button onClick={() => this.createAccount()} className='btn btn-primary' > Tạo tài khoản </button>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>

                    </div>
                </div>
            </div >
        )
    }
}