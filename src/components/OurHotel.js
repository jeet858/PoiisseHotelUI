import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import reception from '../assets/img/addstatick/16616947931644844271reception.jpg';
import rooms from '../assets/img/addstatick/19288274521644843680room.jpg';
import corridor from '../assets/img/addstatick/210901644630381IMG_20220128_161940.jpg';
import Header2 from '../components/Header/Header2';

const OurHotel = (props) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="container">
                <div className="section-title text-center mb-0">
                    <span className="title-tag"> An unit of Dhihi Boutique Hotel LLP </span>
                    <h2>Glimpses of Our Hotel</h2>
                </div>
                <div className="row features-loop">


                    <div className="col-lg-4 col-sm-6 order-1">
                        <div className="feature-box with-hover-img wow fadeInLeft" data-wow-delay=".3s">
                            <div className="icon">
                                <i className=""></i>
                            </div>
                            <h3><a href="#">Reception</a></h3>
                            <p>With a 24 hour front desk, Poiisse offers  convenient luggage storage and professional services to its guest.                        </p>
                            <span className="count">1</span>
                            <div className="hover-img" style={{ backgroundImage: `url(${reception})` }}></div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 order-1">
                        <div className="feature-box with-hover-img wow fadeInLeft" data-wow-delay=".3s">
                            <div className="icon">
                                <i className=""></i>
                            </div>
                            <h3><a href="#">Rooms</a></h3>
                            <p>The room comes packed with facilities of attach bath, mini bar, cupboard and free Wi-Fi.                        </p>
                            <span className="count">2</span>
                            <div className="hover-img" style={{ backgroundImage: `url(${rooms})` }}></div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 order-1">
                        <div className="feature-box with-hover-img wow fadeInLeft" data-wow-delay=".3s">
                            <div className="icon">
                                <i className=""></i>
                            </div>
                            <h3><a href="#">Corridor</a></h3>
                            <p>Our acoustically designed corridors allows easy locomotion and sense of direction  with access to all rooms.</p>
                            <span className="count">3</span>
                            <div className="hover-img" style={{ backgroundImage: `url(${corridor})` }}></div>

                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6 order-1">
                    <div className="feature-box with-hover-img wow fadeInLeft" data-wow-delay=".3s">
                        <div claclassNamess="icon">
                            <i className=""></i>
                        </div>
                        <h3><a href="#">Corridor</a></h3>
                        <p>Our acoustically designed corridors allows easy locomotion and sense of direction in style with access to all rooms.                        </p>
                        <span className="count">3</span>
                                                <div className="hover-img" style={{backgroundImage: `url(${corridor})`}}></div>
                        
                    </div>
                </div> */}


                </div>
            </div>

        </React.Fragment>
    );

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(OurHotel);

