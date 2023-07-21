import React, { useEffect, useState, lazy, Suspense, useRef, useLayoutEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import cityLife from '../assets/img/addstatick/190251640760856416.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from "./Header/Header2";



const BookingSection = (props) => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Header2/>
            <div id="app">
                <section className="breadcrumb-area" style={{backgroundImage: `url(${amm})`}}>
                    <div className="container">
                        <div className="breadcrumb-text">
                            <h2 className="page-title">Rooms</h2>
                            <ul className="breadcrumb-nav" itemscope itemtype="http://schema.org/BreadcrumbList">
                                <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                    <meta itemprop="position" content="1" />
                                    <a style={{cursor:"pointer"}} onClick={()=>{navigate(`/`)}} itemprop="item" title="Home">
                                        Home
                                        <meta itemprop="name" content="Home" />
                                    </a>
                                </li>
                                <li className="active">Rooms</li>
                            </ul>

                        </div>
                    </div>
                </section>
                <div className="pt-120 pb-120">
                    <section className="room-section room-grid-style">
                        <div className="container">
                            <h3>3 rooms available</h3>
                            <br />
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row justify-content-center room-gird-loop">
                                        <div className="col-sm-6">
                                            <div className="room-box mb-30">
                                                <div className="room-img-wrap">
                                                    <div className="room-img" style={{backgroundImage: `url(${cityLife})`}}></div>
                                                </div>
                                                <div className="room-desc">
                                                    <ul className="icons">
                                                        <li><i className="fal fa-bath"></i></li>
                                                        <li><i className="fal fa-wifi"></i></li>
                                                        <li><i className="fal fa-broom"></i></li>
                                                        <li><i className="fal fa-shower"></i></li>
                                                        <li><i className="fal fa-bus"></i></li>
                                                        <li><i className="flaticon-notebook"></i></li>
                                                        <li><i className="flaticon-bath"></i></li>
                                                    </ul>

                                                    <div className="text-left">
                                                        <h4 className="title"><a href="rooms/deluxe-room.html">Deluxe Room</a></h4>
                                                        <p className="mb-10"></p>
                                                        <form action="https://booking.poiissehotel.com/booking" method="POST">
                                                            <input type="hidden" name="_token" value="6mWV5rEliWK0hFh8jPc1JxAtuwBtKCHG7fMW9n0y" />                <input type="hidden" name="room_id" value="11" />
                                                            <input type="hidden" name="start_date" value="13-03-2023" />
                                                            <input type="hidden" name="end_date" value="14-03-2023" />
                                                            <input type="hidden" name="adults" value="1" />
                                                            <button type="submit" className="main-btn btn-filled booking-button">Book now for ₹3,800.00</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="room-box mb-30">
                                                <div className="room-img-wrap">
                                                    <div className="room-img" style={{backgroundImage: `url(${cityLife})`}}></div>
                                                </div>
                                                <div className="room-desc">
                                                    <ul className="icons">
                                                        <li><i className="fal fa-bath"></i></li>
                                                        <li><i className="fal fa-wifi"></i></li>
                                                        <li><i className="fal fa-broom"></i></li>
                                                        <li><i className="fal fa-shower"></i></li>
                                                        <li><i className="flaticon-notebook"></i></li>
                                                        <li><i className="flaticon-bath"></i></li>
                                                        <li><i className="flaticon-cocktail"></i></li>
                                                    </ul>

                                                    <div className="text-left">
                                                        <h4 className="title"><a href="rooms/super-delux.html">Super Delux Room</a></h4>
                                                        <p className="mb-10"></p>
                                                        <form action="https://booking.poiissehotel.com/booking" method="POST">
                                                            <input type="hidden" name="_token" value="6mWV5rEliWK0hFh8jPc1JxAtuwBtKCHG7fMW9n0y" />                <input type="hidden" name="room_id" value="10" />
                                                            <input type="hidden" name="start_date" value="13-03-2023" />
                                                            <input type="hidden" name="end_date" value="14-03-2023" />
                                                            <input type="hidden" name="adults" value="1" />
                                                            <button type="submit" className="main-btn btn-filled booking-button">Book now for ₹4,000.00</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="room-box mb-30">
                                                <div className="room-img-wrap">
                                                    <div className="room-img" style={{backgroundImage: `url(${cityLife})`}}></div>
                                                </div>
                                                <div className="room-desc">
                                                    <ul className="icons">
                                                        <li><i className="fal fa-bath"></i></li>
                                                        <li><i className="fal fa-wifi"></i></li>
                                                        <li><i className="fal fa-broom"></i></li>
                                                        <li><i className="fal fa-shower"></i></li>
                                                        <li><i className="fal fa-bed"></i></li>
                                                        <li><i className="fal fa-bus"></i></li>
                                                        <li><i className="flaticon-notebook"></i></li>
                                                    </ul>

                                                    <div className="text-left">
                                                        <h4 className="title"><a href="rooms/executive.html">Executive Room</a></h4>
                                                        <p className="mb-10"></p>
                                                        <form action="https://booking.poiissehotel.com/booking" method="POST">
                                                            <input type="hidden" name="_token" value="6mWV5rEliWK0hFh8jPc1JxAtuwBtKCHG7fMW9n0y" />                <input type="hidden" name="room_id" value="9" />
                                                            <input type="hidden" name="start_date" value="13-03-2023" />
                                                            <input type="hidden" name="end_date" value="14-03-2023" />
                                                            <input type="hidden" name="adults" value="1" />
                                                            <button type="submit" className="main-btn btn-filled booking-button">Book now for ₹3,500.00</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="room-details">
                                        <div className="room-booking-form">
                                            <h5 className="title">Check Availability</h5>
                                            <form action="/room" method="GET">
                                                <div className="input-group input-group-two left-icon mb-20">
                                                    <label for="arrival-date">Check-In</label>
                                                    <div className="icon"><i className="fal fa-calendar-alt"></i></div>
                                                    <input type="text" placeholder="13-03-2023" value="13-03-2023" name="start_date" id="arrival-date" />
                                                </div>
                                                <div className="input-group input-group-two left-icon mb-20">
                                                    <label for="departure-date">Check-Out</label>
                                                    <div className="icon"><i className="fal fa-calendar-alt"></i></div>
                                                    <input type="text" placeholder="14-03-2023" value="14-03-2023" name="end_date" id="departure-date" />
                                                </div>
                                                <div className="input-group input-group-two left-icon mb-20">
                                                    <label for="adults">Guests</label>
                                                    <select name="adults" id="adults">
                                                        <option value="1" selected >1 Guest</option>
                                                        <option value="2" >2 Guests</option>
                                                        <option value="3" >3 Guests</option>
                                                        <option value="4" >4 Guests</option>
                                                        <option value="5" >5 Guests</option>
                                                        <option value="6" >6 Guests</option>
                                                        <option value="7" >7 Guests</option>
                                                        <option value="8" >8 Guests</option>
                                                        <option value="9" >9 Guests</option>
                                                        <option value="10" >10 Guests</option>
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <button className="main-btn btn-filled">Check Availability</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {

})(BookingSection);
