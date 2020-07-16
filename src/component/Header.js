import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { BaseService } from '../service/BaseService'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }


    getClassName = (path) => {
        let className = "nav-item";
        if (window.location.pathname === `/${path}`) {
            className = `${className} active`;
        };
        return className;
    }

    LogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    componentDidMount() {
        this.baseService = new BaseService();
        this.baseService.get('/user/me').then((res) => {
            this.setState({
                data: res
            })
        });
    }


    render() {
        const { data } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/home">SMART <span>REAL</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
	                </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <Router>
                            <ul className="navbar-nav ml-auto">
                                <li className={this.getClassName("")}><a href="/" className="nav-link">Home</a></li>
                                <li className={this.getClassName("maps")}><a href="maps" className="nav-link">Location</a></li>
                                <li className={this.getClassName("favorite")}><a href="favorite" className="nav-link">Favorite</a></li>
                                <li className={this.getClassName("blog")}><a href="blog" className="nav-link">Blog</a></li>
                                <li className={this.getClassName("contact")}><a href="contact" className="nav-link">Contact</a></li>
                            </ul>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ border: 'none', fontSize: 14, backgroundColor: '#FFFF', color: 'black' }} >
                                    {data.fullName} </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" onClick={() => window.location.href = "/user"}>Profile</a>
                                    <a class="dropdown-item" onClick={() => window.location.href = "/login"}>LogOut</a>
                                    {/* <a class="dropdown-item" onClick={() => window.location.href = "/pass"}>ChangePassword</a> */}
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            </nav>
        )
    }
}

