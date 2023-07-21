import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import backgroundImage from '../assets/img/addstatick/34631643703825banner2.jpg';
import General from '../assets/img/addstatick/789316407630621.jpg';
import Safty from '../assets/img/addstatick/14321640762972shutterstock_383952502-1.jpg';
import Cleaning from '../assets/img/addstatick/224121640762869shutterstock_383952502-1.jpg';
import Bathroom from '../assets/img/addstatick/6941640761756IMG_5909.jpg';
import Bedroom from '../assets/img/addstatick/14285605051650951397AVK01781.jpg';
import Media from '../assets/img/addstatick/120681640762230download.jpg';
import Parking from '../assets/img/addstatick/254671640762517416.jpg';
//import Media from '../assets/img/addstatick/120681640762230download.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from './Header/Header2';




const Ammenities = (props) => {
    const [ShowTop, setShowTop] = useState(false);

  const navigate = useNavigate();
useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        });
    }, []);

    return (
        <React.Fragment>
            <Header2/>
            <section className="breadcrumb-area" style={{ backgroundImage: `url(${amm})` }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <span>The ultimate luxury</span>
                        <h2 className="page-title">Amenities</h2>
                        <ul className="breadcrumb-nav">
                            <li><a style={{cursor:"pointer"}} onClick={()=>{navigate(`/`)}}>Home</a></li>
                            <li className="active">Amenities</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="restaurant-tab-area  pb-90">
                <Tab.Container id="left-tabs-example" defaultActiveKey="room_id_55">
                            <ul className="amenities_ul restaurant-rood-list  justify-content-center nav nav-pills mb-30" id="restaurant-tab"
                                role="tablist">
                                <Nav className='w-100 amenties-nav'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_55"><li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" >
                                                <i className="fal fa-badge-check"></i>
                                                <span className="title">General </span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_54"><li className="nav-item" eventKey="room_id_54">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-bed"></i>
                                                <span className="title">Safety & security</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_53"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-concierge-bell"></i>
                                                <span className="title">Cleaning services</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_52"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-bath"></i>
                                                <span className="title">Bathroom</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_51"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-bed"></i>
                                                <span className="title">Bedroom</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_50"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-wifi"></i>
                                                <span className="title">Media & Technology</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_48"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill" >
                                                <i className="fal fa-car"></i>
                                                <span className="title">Parking </span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="room_id_47"><li className="nav-item">
                                            <a className="nav-link " data-toggle="pill">
                                                <i className="fal fa-broom"></i>
                                                <span className="title">Reception services</span>
                                            </a>
                                        </li></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </ul>
                       
                        
                        <Col sm={12}>
                            <div className="container">

                                <div className="tab-content room-list-loop " id="restaurant-tabContent">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="room_id_55">
                                            <div className="tab-pane fade show active" id="room_id_55" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${General})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">General </h4>
                                                                        <p>
                                                                            Our premises is equipped with air conditioning to the beat the heat. The floors of our property has a wide selection of floorings including Wooden, Italian and Carpet as prefered. To make the commute easier within the property lifts are installed for convenience of the guests.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Air conditioning 	</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Wooden/Italian/Carpet floor</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Lift</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_54">

                                            <div className="tab-pane fade show active" id="room_id_54" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Safty})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Safety & security</h4>
                                                                        <p>
                                                                            For a better sense of security we have a pre-installed safety deposit boxes to keep your belongings safe and secure. You can easily change the codes and secure your personal possession with just a click of your fingers.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Safety deposit box</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>CCTV</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_53">
                                            <div className="tab-pane fade show active" id="room_id_53" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Cleaning})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Cleaning services</h4>
                                                                        <p>
                                                                            Poiisse offers a daily housekeeping to all its guests at no extra cost. In addition to enhance your experience and make your stay comfortable we also offer dry cleaning and laundry with an additional fee.
                                                                        </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Daily housekeeping </span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Dry cleaning Additional charge </span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Laundry Additional charge</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_52">
                                            <div className="tab-pane fade show active" id="room_id_52" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Bathroom})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Bathroom</h4>
                                                                        <p>
                                                                            All our bathrooms are equipped with free supply of toilet papers and toiletries. A hair dryer can also be provided on request of the guest as and when needed.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Toilet paper</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Free toiletries</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Hairdryer(On Request)</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_51">
                                            <div className="tab-pane fade show active " id="room_id_51" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Bedroom})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Bedroom</h4>
                                                                        <p>
                                                                            All the bedrooms have a pre-installed wardrobe, electric kettle and minibar for the benefit of our guests. Furthermore, complimentary water bottles are also provided in all rooms for the satisfaction of our guests.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Wardrobe</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Electric kettle</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Minibar </span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Complimentary Water Bottle</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_50">
                                            <div className="tab-pane fade show active" id="room_id_50" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Media})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Media &  Technology</h4>
                                                                        <p>
                                                                            The rooms at Poiisse are installed with a Television broadcasting satellite channels. A telephone is provided in all rooms for the ease of our guests. All the areas of our premises has an accessable Wifi network without any extra charges.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>TV</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Satellite channels</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Telephone </span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>WiFi available in all areas (free of charge)</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_48">
                                            <div className="tab-pane fade show active" id="room_id_48" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" style={{ backgroundImage: `url(${Parking})` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Parking </h4>
                                                                        <p>
                                                                            We understand that an automobile is indeed a necessity in a modern life for easy commutes. So keeping in mind our guest's preferences we provide free parking space for all our guests during their stay.
                                                                        </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Free parking </span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="room_id_47">
                                            <div className="tab-pane fade show active" id="room_id_47" role="tabpanel">
                                                <div className="room-box mb-30">
                                                    <div className="row no-gutters justify-content-center">
                                                        <div className="col-lg-5 col-md-10">
                                                            <div className="room-img-wrap">
                                                                <div className="room-img" ></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-10">
                                                            <div className="room-desc">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm-12">

                                                                        <h4 className="title">Reception services</h4>
                                                                        <p>
                                                                            Poiisse takes pride in its client service and to upheld our reputation we provide a wide range of services including a luggage storage for all our business professional guests, a tour desk to solve all the curiosity of our guests, a 24 - hour front desk support at your convenience to help our guests with every requirement. Furthermore, we provide a cab on call, doctor on call and a wake up call as per the need of our guests.                                            </p>
                                                                        <div className="room-fearures clearfix">
                                                                            <h3 className="subtitle">Amenities</h3>
                                                                            <ul className="room-fearures-list">
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Luggage storage</span></li>
                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Tour desk</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>24-hour front desk</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Doctor On Call</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Cab on Call</span></li>

                                                                                <li><i className="fal fa-toilet-paper-alt"></i>  <span>Wake up Call</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                        </Col>
                </Tab.Container>
            </section >
            <a style={{cursor:"pointer"}} href="#" className={ShowTop == true ? "back-to-top active" : "back-to-top"} id="backToTop">
                    <i className="fa fa-angle-double-up"></i>
                </a>
        </React.Fragment >
    );
}
const mapStateToProps = state => ({
});
export default connect(mapStateToProps, {})(Ammenities);