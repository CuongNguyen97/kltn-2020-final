import React, { Component } from 'react';
import './css/style.scss';
import { ProjectService } from '../../service';
import _ from "lodash"
import Axios from 'axios';
import { Avatar, Button } from 'antd';
import userAvatar from './images/user.png'
import { Input } from 'antd';

const { TextArea } = Input;

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                galleries: [],
                rooms: [],
            },
            active: 0,
            comments: [],
            comment: "",
        }
        this.intervalID = 0;
        this.projectService = new ProjectService();
        this.id = _.get(this.props, "match.params.id")
        window.scrollTo(0, 0);
        // this.baseService = new BaseService();
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.active("next")();
        }, 5000);
        Promise.all([
            this.projectService.getDetailProject(0, 20, "", this.id),
            this.projectService.getComents(this.id),
        ]).then(res => {
            const [data, comments] = res;
            this.setState({
                data,
                comments,
            })
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalID);
    }

    active = (action) => () => {
        const length = this.state.data.galleries.length;
        if (length === 0) return;
        let { active } = this.state;
        if (action === "next") {
            active = active === length - 1 ? 0 : active + 1;
        } else {
            active = active === 0 ? length - 1 : active - 1;
        }
        this.setState({
            active,
        })
    }

    onCreateComment = () => {
        const { comment } = this.state;
        this.projectService.insertComnent(this.id, comment).then(() => {
            this.projectService.getComents(this.id).then((comments) => {
                this.setState({
                    comments,
                    comment: "",
                })
            })
        })
    }

    onChange = ({ target: { value } }) => {
        this.setState({
            comment: value
        })
    }

    render() {
        const { data, active, comments, comment } = this.state
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div style={{ width: '100%', height: 500,backgroundColor:'#0B0A0A'}} className="carousel-inner">
                        {/* <div style={{ height: "100%" }} className="carousel-item active">
                            <img style={{ height: "100%" }} className="d-block w-100"
                                src={hinh1}
                                alt="First slide" /></div>
                        <div style={{ height: "100%" }} className="carousel-item">
                            <img style={{ height: "100%" }} className="d-block w-100"
                                src={hinh2}
                                alt="Second slide" /></div>
                        <div style={{ height: "100%" }} className="carousel-item">
                            <img style={{ height: "100%" }} className="d-block w-100"
                                src={hinh3}
                                alt="Third slide" /></div> */}
                        {data.galleries && data.galleries.map((item, index) => {

                            return <div style={{ height: "100%", backgroundColor:'#0B0A0A'  }} className={`carousel-item ${active === index ? "active" : ""}`}>
                                <img style={{ height: "100%", backgroundColor:'#0B0A0A'  }} className="d-block w-100"
                                    src={item.imageUrl}
                                />
                            </div>

                        })}
                    </div>
                    <div key="prev" className="carousel-control-prev" onClick={this.active("prev")} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </div>
                    <div key="next" className="carousel-control-next" onClick={this.active("next")} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </div>
                </div>
                <br />
                <br />
                <br />

                <div className="row no-gutters">
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="room-wrap d-md-flex">
                                <img style={{ width: "1000px" }} src={data.thumbnailUrl} />
                                {/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
                                <div className="half left-arrow d-flex align-items-left">
                                    <div className="text p-4 p-xl-5 text-center">
                                        <p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
                                        {/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
                                        <h3 className="mb-3">{data.subject}</h3>
                                        <ul className="list-accomodation">
                                            <li style={{fontSize: 25}}><span style={{fontSize: 25}}>Giá :</span> {data.price}</li>
                                            <li><span style={{fontSize: 20}}>Địa chỉ : </span>{data.fullAddress} </li>
                                            <li>
                                                <span style={{fontSize: 20}}>Thiết kế : </span> 
                                                {data.properties}</li>
                                            <li><span style={{fontSize: 20}}>Mô tả : </span>{data.longDescription}</li>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <section className=" bg-light" >
                    <div className="row no-gutters header-title justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <h2 className="title">Design </h2>
                        </div>
                    </div>
                </section>


                {data.galleries && data.rooms.map(item => {
                    return <div className="col-md-5">
                        <img style={{ height: 650, width: "170%", paddingTop: 30,marginLeft: "42%" }} src={item.imageUrl} />
                    </div>

                })}
                <br />
                <br />
                <div className='container comment-container' style={{ paddingTop: 15 }}>
                    <div className='row'>
                        <TextArea onChange={this.onChange} value={comment} rows={4} />
                        <div style={{ width: 90,paddingTop : 20 }}>
                            <Avatar size={64} src={userAvatar} />
                        </div>
                        <div style={{ width: 990 }}></div>
                        <div className='col-md-2'>
                            <Button type="primary" shape="round" onClick={this.onCreateComment}>Đăng tải bình luận</Button>
                            <div style = {{marginRight: 0}}></div>
                        </div>
                        {Array.isArray(comments) && comments.map((x, idx) => {
                            return <div key={idx} className='col-md-12' style={{ paddingTop: 70 }}>
                                <div className='row'>
                                    <div style={{ width: 67 }}>
                                        <Avatar size={70} src={userAvatar} />
                                    </div>
                                    <div className='col-md-10'>
                                        <div style={{ color: '#4183C4', fontWeight: 'bold' }}>{x.user.fullName}</div>
                                        <div>{x.content}</div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>


                </div>
            </div>

        )

    }
}

export default Product;