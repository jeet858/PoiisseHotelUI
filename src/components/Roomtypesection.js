
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Royale from '../assets/img/addstatick/88261644482712theroyal.png';
import Hiraan from '../assets/img/addstatick/160371644481279hiraans.png';
import BypassDhaba from '../assets/img/addstatick/64781641401741bypass dhaba.png';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const Roomtypesection = (props) => {
    const navigate = useNavigate();

    const [key, setKey] = useState('home');
    return (
        <React.Fragment>
            <div className="align-items-center">
                <div className="col-lg-12">
                    <div className="section-title  text-center" style={{ marginBottom: "40px" }}>
                        <h2>Indulgence fest for your taste buds </h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                        <Row>
                            <Col sm={12}>
                                <ul className="room-filter nav-pills" id="room-tab"
                                    role="tablist">
                                    <Nav variant="tabs" className='border-0 justify-content-center '>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                    <b>The Royal Terrace</b>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                            <b>Hiraan's Café </b>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                            <b>Hiraan's Patisserie</b>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey=" fourth">
                                            <b> Bypass Dhabba : Flavors of Highway</b>
                                           </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </ul>
                            </Col>
                            <Col sm={12}>
                            <div className="tab-content mt-40" id="room-tabContent">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                            <div className="tab-pane fade show active" id="1" role="tabpanel">
                                                <div className="room-items about-section">
                                                    <div className="about-text-box">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6">
                                                                <div className="about-img">
                                                                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                                                                        <div className="carousel-inner">

                                                                        </div>
                                                                        <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                        <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Next</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="about-text">

                                                                    <h3><img src={Royale} alt="logo" /></h3>
                                                                    <p>A chic contemporary bar is the perfect place to head for a fun evening where you can bask in the delightful ambiance with a view of the cities Hussle and bustle. Enjoy your favorite drink along with a vasty choice of snacks. </p>
                                                                    <a className="main-btn btn-filled" style={{ cursor:"pointer", lineHeight: "50px" }} onClick={()=>{navigate(`/about`)}}>take a tour</a>
                                                                    <a className="main-btn btn-filled" style={{ cursor:"pointer", lineHeight: "50px", backgroundColor: "#444", borderColor: "#333", color: "#fff" }} onClick={()=>{navigate(`/about`)}}>View more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                   
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        
                                            <div className="tab-pane fade show active" id="1" role="tabpanel">
                                                <div className="room-items about-section">
                                                    <div className="about-text-box">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6">
                                                                <div className="about-img">
                                                                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                                                                        <div className="carousel-inner">

                                                                        </div>
                                                                        <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                        <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Next</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="about-text">

                                                                    <h3><img src={Hiraan} alt="logo" /></h3>
                                                                    <p>Hirans Café is a lovely place where you can enjoy a superb selection of food with a steaming cup of coffee. The catch of the day ranges from our fine pan Asian to fushion south Indian and a vast variety of continental cuisine. </p>
                                                                    <a href="restaurantdetail/47.html" className="main-btn btn-filled" style={{ lineHeight: "50px" }}>take a tour</a>
                                                                    <a href="#" className="main-btn btn-filled" style={{ lineHeight: "50px", backgroundColor: "#444", borderColor: "#333", color: "#fff" }}>View more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                            <div className="tab-pane fade show active" id="1" role="tabpanel">
                                                <div className="room-items about-section">
                                                    <div className="about-text-box">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6">
                                                                <div className="about-img">
                                                                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                                                                        <div className="carousel-inner">

                                                                        </div>
                                                                        <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                        <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Next</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="about-text">

                                                                    <h3><img src={Hiraan} alt="logo" /></h3>
                                                                    <p>A chic contemporary bar is the perfect place to head for a fun evening where you can bask in the delightful ambiance with a view of the cities Hussle and bustle. Enjoy your favorite drink along with a vasty choice of snacks. </p>
                                                                    <a href="restaurantdetail/47.html" className="main-btn btn-filled" style={{ lineHeight: "50px" }}>take a tour</a>
                                                                    <a href="#" className="main-btn btn-filled" style={{ lineHeight: "50px", backgroundColor: "#444", borderColor: "#333", color: "#fff" }}>View more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey=" fourth">
                                            <div className="tab-pane fade show active" id="1" role="tabpanel">
                                                <div className="room-items about-section">
                                                    <div className="about-text-box">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-6">
                                                                <div className="about-img">
                                                                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                                                                        <div className="carousel-inner">

                                                                        </div>
                                                                        <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Previous</span>
                                                                        </a>
                                                                        <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                            <span className="sr-only">Next</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="about-text">

                                                                    <h3><img src={BypassDhaba} alt="logo" /></h3>
                                                                    <p>Bypass Dhabba is one of the finest multi-cuisine restaurant in Kolkata, serving a diverse variety like Mughlai, Tandoor,  Chinese, with a specialty in Indian. </p>
                                                                    <a href="restaurantdetail/47.html" className="main-btn btn-filled" style={{ lineHeight: "50px" }}>take a tour</a>
                                                                    <a href="#" className="main-btn btn-filled" style={{ lineHeight: "50px", backgroundColor: "#444", borderColor: "#333", color: "#fff" }}>View more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </Tab.Pane>
                                </Tab.Content>
                              </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </React.Fragment>
    );

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Roomtypesection);