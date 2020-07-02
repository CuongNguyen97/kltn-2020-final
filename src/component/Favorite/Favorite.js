import React, { Component } from 'react';

class Favorite extends Component {
    render() {
        return (
            <div>
                <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 text-center fadeInUp">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span> <span>Favorite <i
                                    className="fa fa-chevron-right"></i></span></p>
                                <h1 className="mb-0 bread">Favorite</h1>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Favorite;