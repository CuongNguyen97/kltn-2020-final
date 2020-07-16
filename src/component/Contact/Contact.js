import React, { Component } from 'react';
import './css/Style.scss'
import images from './images/contact.jpg'


class Contact extends Component {
    render() {
        return (
            <div>
                <section className="hero-wrap1 d-flex flex-column bg-white"  d1ata-stellar-background-ratio="0.5">
                    <img style={{height: 400,width: "100%",position: 'absolute'}} src={images}/>
                    <div className="overlay"></div>
                        <div style={{marginTop: 100}} className="container">
                         <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 text-center">
          	                    <p className="breadcrumbs mb-2">
                                      <span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span>
                                       <span>Contact <i className="fa fa-chevron-right"></i></span></p>
                                <h1 className="mb-0 bread">Contact Us</h1>
                             </div>
                        </div>
                    </div>
                    <div style={{marginTop: 180}} className="col-md-12">
						<div className="wrapper">
							<div className="row no-gutters">
								<div className="col-lg-8 col-md-7 d-flex align-items-stretch">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-4">Get in touch</h3>
										<div id="form-message-warning" className="mb-4"></div> 
					      		<div id="form-message-success" className="mb-4">
					      		</div>
								  
                                  <img style={{ width: '80%' }} src={require('./images/recep.jpg')} />
                            
										{/* <form method="POST" id="contactForm" name="contactForm" className="contactForm">
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label className="label" for="name">Full Name</label>
														<input type="text" className="form-control" name="name" id="name" placeholder="Name">
													</div>
												</div>
												<div className="col-md-6"> 
													<div className="form-group">
														<label className="label" for="email">Email Address</label>
														<input type="email" className="form-control" name="email" id="email" placeholder="Email">
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<label className="label" for="subject">Subject</label>
														<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject">
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<label className="label" for="#">Message</label>
														<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group">
														<input type="submit" value="Send Message" className="btn btn-primary">
														<div className="submitting"></div>
													</div>
												</div>
											</div>
										</form> */}
                                        
									</div>
								</div>
								<div className="col-lg-4 col-md-5 d-flex align-items-stretch">
									<div className="info-wrap bg-primary w-100 p-md-5 p-4">
										<h3>Let's get in touch</h3>
										<p className="mb-4">We're open for any suggestion or just to have a chat</p>
					        	<div className="dbox w-100 d-flex align-items-start">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-map-marker"></span>
					        		</div>
					        		<div className="text pl-3">
						            <p><span>Address:</span> 528 Huynh Tan Phat, P. Binh Thuan, District 7, HCM City</p>
						          </div>
					          </div>
					        	<div className="dbox w-100 d-flex align-items-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-phone"></span>
					        		</div>
					        		<div className="text pl-3">
						            <p><span>Phone:</span> <a href="tel://1234567920">0792691511</a></p>
						          </div>
					          </div>
					        	<div className="dbox w-100 d-flex align-items-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-paper-plane"></span>
					        		</div>
					        		<div className="text pl-3">
						            <p><span>Email:</span> <a href="mailto:info@yoursite.com">nvcuong1502@gmail.com</a></p>
						          </div>
					          </div>
					        	<div className="dbox w-100 d-flex align-items-center">
					        		<div className="icon d-flex align-items-center justify-content-center">
					        			<span className="fa fa-globe"></span>
					        		</div>
					        		<div className="text pl-3">
						            <p><span>Website</span> <a href="#">24hBDS.com</a></p>
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
export default Contact;