import React, { Component } from 'react';
import './css/style.scss';
import { ProjectService } from '../../service';
import _ from "lodash"
import Axios from 'axios';
import { Avatar, Button } from 'antd';
import userAvatar from './images/user.png'

const dataComment = [
    { name: "Nguyễn Văn A", comment: "chỗ này ok" },
    { name: "Tèo Văn C", comment: "Tôi đánh giá chỗ này rất cao" },
    { name: "Write Cuong", comment: "Chưa thấy chỗ nào tệ ntn" },
]

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.projectService = new ProjectService();
        this.id = _.get(this.props, "match.params.id")
    }

    componentDidMount() {
        this.projectService.getDetailProject(0, 20, "", this.id)
            .then(data => this.setState({
                data: data
            }))
    }

    render() {
        const { data } = this.state
        console.log("Product -> render -> data", data)
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div style={{ width: '100%', height: 500 }} className="carousel-inner">
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

                            return <div style={{ height: "100%" }} className={"carousel-item " + index == 1 && "active"}>
                                <img style={{ height: "100%" }} className="d-block w-100"
                                    src={item.imageUrl}
                                />
                            </div>

                        })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br />
                <br />
                <br />

                <div className="row no-gutters">
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="room-wrap d-md-flex">
                                <img style={{ width: "600px" }} src={require('./images/haison.jpg')} />
                                {/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
                                <div className="half left-arrow d-flex align-items-center">
                                    <div className="text p-4 p-xl-5 text-center">
                                        <p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
                                        {/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
                                        <h3 className="mb-3">{data.subject}</h3>
                                        <ul className="list-accomodation">
                                            <li><span>{data.properties}</span> </li>
                                            <li><span>Giá :</span> {data.price}</li>
                                            <li><span>Địa chỉ: </span>{data.fullAddress} </li>
                                            <li><span>Thiết kế: </span> 1 trệt + 1 lửng + 1 phòng ngủ + 1WC + ban công </li>
                                            <li><span>Tiện ích: </span> Tặng nội thất cơ bản.</li>
                                             <li><span> </span> Thanh toán linh hoạt theo tiến độ xây dựng.</li>
                                             <li><span> </span> Thích hợp để đầu tư hay ở mua tại thời điểm này giá rẻ.</li>
                                             <li><span> </span>   Sở hữu vĩnh viễn.</li>
                                             <li><span> </span>   Đặc biệt: Có hầm gửi xe + thang máy.</li>
                                             <li><span> </span>   Giá trọn gói chỉ 280 triệu/căn.</li>
                                             <li><span> </span>   Thông tin pháp lý: ĐÃ có sổ hồng đã được phê duyệt quyết định chủ đầu tư.</li>
                                                                         
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
										<h2 className="title">Design Rooms</h2>
									</div>
								</div>
                                </section>
                                

                {data.galleries && data.rooms.map(item => {
                            return <div className="col-md-5">
                                <img style={{ height: 250, width: "100%" }} src={item.imageUrl} />
                            </div>

                        })}
                <br />
                <br />
                <div className='container comment-container' style={{ paddingTop: 15 }}>
                    <div className='row'>
                        <div style={{ width: 85 }}>
                            <Avatar size={64} src={userAvatar} />
                        </div>
                        <div style={{ width: 700 }}></div>
                        <div className='col-md-2'>
                            <Button type="primary" shape="round" onClick={() => this.onCreateComment()}>Đăng tải bình luận</Button>
                        </div>
                        {dataComment && dataComment.map(x => {
                            return <div className='col-md-12' style={{ paddingTop: 50 }}>
                                <div className='row'>
                                    <div style={{ width: 67 }}>
                                        <Avatar size={64} src={userAvatar} />
                                    </div>
                                    <div className='col-md-10'>
                                        <div style={{ color: '#4183C4', fontWeight: 'bold' }}>{x.name}</div>
                                        <div>{x.comment}</div>
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