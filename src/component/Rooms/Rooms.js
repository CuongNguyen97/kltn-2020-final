import React, { Component } from 'react';
import './css/styles.scss'
class Rooms extends Component {
    render() {
        return (
            <div>
                <section className="hero-wrap hero-wrap-2"  data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9  text-center">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>Rooms <i className="fa fa-chevron-right"></i></span></p>
                                <h1 className="mb-0 bread">Apartment Room</h1>
                            </div>
                        </div>
                    </div>
                </section>
				<br/>
				<br/>
				<br/>
                <section className=" bg-light" >
					<div className="container-fluid px-md-0">
						<div className="row no-gutters">
							<div className="row" style={{margin: 10}}>
								<div className="col-md-6">
									<div className="room-wrap d-md-flex">
										<img style={{ width: '50%' }} src={require('./images/room-1.jpg')} />
										{/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
										<div className="half left-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Suite Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="room-wrap d-md-flex">
										{/* <a href="#" className="img" style="background-image: url(images/room-2.jpg);"></a> */}
										<img style={{ width: '50%' }} src={require('./images/room-2.jpg')} />
										<div className="half left-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Standard Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="room-wrap d-md-flex">
										{/* <a href="#" className="img order-md-last" style="background-image: url(images/room-3.jpg);"></a> */}
										<div className="half right-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Family Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
										<img style={{ width: '50%' }} src={require('./images/room-3.jpg')} />
									</div>
								</div>

								<div className="col-md-6">
									<div className="room-wrap d-md-flex">
										{/* <a href="#" className="img order-md-last" style="background-image: url(images/room-3.jpg);"></a> */}
										<div className="half right-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Deluxe Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
										<img style={{ width: '50%' }} src={require('./images/room-6.jpg')} />
									</div>
								</div>

                                <div className="col-md-6">
									<div className="room-wrap d-md-flex">
										<img style={{ width: '50%' }} src={require('./images/room-1.jpg')} />
										{/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
										<div className="half left-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Luxury Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
									</div>
								</div>

                                <div className="col-md-6">
									<div className="room-wrap d-md-flex">
										<img style={{ width: '50%' }} src={require('./images/room-1.jpg')} />
										{/* <a href="#" className="img" style="background-image: url(images/room-1.jpg);"></a> */}
										<div className="half left-arrow d-flex align-items-center">
											<div className="text p-4 p-xl-5 text-center">
												<p className="star mb-0"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></p>
												{/* <!-- <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p> --> */}
												<h3 className="mb-3"><a href="rooms.html">Superior Room</a></h3>
												<ul className="list-accomodation">
													<li><span>Max:</span> 3 Persons</li>
													<li><span>Size:</span> 45 m2</li>
													<li><span>View:</span> Sea View</li>
													<li><span>Bed:</span> 1</li>
												</ul>
												<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
											</div>
										</div>
									</div>
								</div>
                                
							</div>
						</div>
					</div>
				</section>
			
                
            </div>
        );
    }
}

export default Rooms;
//addd