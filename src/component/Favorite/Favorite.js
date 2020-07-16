import React, { Component } from 'react';
import { BaseService } from '../../service/BaseService'
import { Link } from 'react-router-dom';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

        this.baseService = new BaseService();
    }

    getData = () => {
        this.baseService.get('/favorite/project/').then((res)=> {
            this.setState({
                data: res,
            });
        });
    }

    componentDidMount() {
        this.getData();
    }

    onClickFavourite = (id, index) => {
        this.baseService.post("/favorite/project/" + id)
            .then(result => {
                if (result) {
                    const { data } = this.state;

                    data[index].isLiked = result.isLiked;
                    this.setState({});
                }
            })

    }

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
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row d-flex">
                            {this.state.data && this.state.data.map((item, index) => {
                                return <div key={item.id} className="col-md-4">
                                    <div className="blog-entry align-self-stretch" style={{ position: 'relative' }}>
                                        <i onClick={() => this.onClickFavourite(item.id, index)} className="fa fa-heart" aria-hidden="true" style={{
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            right: '0px',
                                            padding: '20px',
                                            fontSize: '30px',
                                            zIndex: 1,
                                            color: item.isLiked && '#fd7792'
                                        }}></i>
                                        {/* <a href="blog-single.html" className="block-20 rounded" background-images url('images/image_1.jpg');">
               </a>   */}
                                        <img style={{ width: "100%", height: "270px", opacity: 0.7, zIndex: 0 }} src={item.thumbnailUrl} />
                                        <div className="text p-4 text-center" style={{ height: '265px' }}>
                                            <h3 className="heading"><Link to={`/product/${item.id}`}>{item.subject}</Link></h3>
                                            <div className="meta mb-2">
                                                <div><a href="#">{item.dateTime}</a></div>

                                                <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> </a></div>
                                            </div>
                                            <p style={{ height: '85px', overflow: 'hidden' }}>{item.properties}</p>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Favorite;