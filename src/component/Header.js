import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"

export default class Header extends Component {
    getClassName = (path) => {
        let className = "nav-item";
        if (window.location.pathname === `/${path}`) {
            className = `${className} active`;
        };
        return className;
    }

    logOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      
    render() {
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
                        <div className="btn btn-success" onClick={() => this.logOut()}> Đăng Xuất</div>
                        </Router>
                    </div>
                </div>
            </nav>
        )
    }
}

