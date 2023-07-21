import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import poiisselogo from '../../assets/img/addstatick/poiissehotel.png';


const Footer = (props) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <footer className="footer-two">
                <div className="footer-widget-area pt-50 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 order-1">
                                <div className="widget site-info-widget mb-40">
                                    <div className="footer-logo mb-10">
                                        <img  src={props.companyDetails.companyFooterLogo} alt="Logo" style={{width: "200px",margin: "auto",display: "block"}} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-12 order-2 order-lg-2">
                                <div className="widget contact-widget">
                                    <div className="contact-lists row">
                                        <div className="col-lg-3">
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-call"></i>
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Phone Number</h6>
                                                    <a href="callto:+91 6292 260 400">+91 6292 260 400</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 ">
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-message"></i>
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Email Address</h6>
                                                    <a href="mailto:booking@poiissehotel.com">{props.companyDetails?.adminEmail}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ">
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-location-pin"></i>
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Office Address</h6>{props.companyDetails?.address1} </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 ">
                                            <h4 className="widget-title">Social</h4>
                                            <div className="social-links  footer_social_links" style={{ textAlign: "left" }}>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="copyright-area pt-30 pb-30">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-5 order-2 order-md-1">
                                <p className="copyright-text copyright-two">Copyright By@<a onClick={()=>{navigate(`/`)}}>Poiisse</a> - 2020</p>
                            </div>
                            <div className="col-lg-6 col-md-7 order-1 order-md-2">
                                <div className="footer-menu text-center text-md-right">
                                    <ul>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>{navigate(`/terms`)}}>Terms of use</a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>{navigate(`/#`)}}>Privacy Environmental Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );

}

const mapStateToProps = state => ({
    companyid: state.HomeData.companyid,
    companyDetails: state.HomeData.companyDetails
});

export default connect(mapStateToProps, {})(Footer);

