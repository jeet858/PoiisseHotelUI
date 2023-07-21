import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cityLife from '../assets/img/addstatick/190251640760856416.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import maprout from '../assets/img/map_route.jpg';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from '../components/Header/Header2';



const Contact = (props) => {
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
    <section className="breadcrumb-area" style={{backgroundImage: `url(${amm})`}}>
        <div className="container">
            <div className="breadcrumb-text">
                <span>The ultimate luxury</span>
                <h2 className="page-title">Contact Us</h2>

                <ul className="breadcrumb-nav">
                    <li><a style={{cursor:"pointer"}} onClick={()=>{navigate(`/`)}}>Home</a></li>
                    <li className="active">Contact Us</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="contact-part pt-115">
        <div className="container">
            <div className="contact-info  pb-60">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6 col-10">
                        <div className="info-box">
                            <div className="icon">
                                <i className="flaticon-home"></i>
                            </div>
                            <div className="desc">
                                <h4>Office Address</h4>
                                <p>45B/B Canal South Road, Metropolitan Co-Operative Housing Society Ltd. Near Byepass Dhaba. West Bengal, India, Pin - 700105.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-10">
                        <div className="info-box">
                            <div className="icon">
                                <i className="flaticon-phone"></i>
                            </div>
                            <div className="desc">
                                <h4>Phone Number</h4>
                                <p>+91 6292 260 400 <br/> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-10">
                        <div className="info-box">
                            <div className="icon">
                                <i className="flaticon-message"></i>
                            </div>
                            <div className="desc">
                                <h4>Email Address</h4>
                                <p>booking@poiissehotel.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid frm_connectivity"  style={{display:"none"}}>
        <div className="row">
            <div className="col-lg-12">
                <div className="connectivity_section">
                   
                    <div className="section-title text-center mb-50">
                        <span className="title-tag"> Land Mark destinations </span>
                        <h2>Connectivity</h2>
                        <p>Poiisse is strategically located from the IT Hubs at New Town, Salt Lake & the traditional business hubs of central Kolkata.</p>
                    </div>

                    <div className="vertical-tab" role="tabpanel">
                        <ul className="nav nav-tabs nav-pills justify-content-center" role="tablist">
                            <li role="presentation" className="nav-item "><a href="#Section1" className="nav-link active" data-toggle="tab">Sealdah Station</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section2" className="nav-link" data-toggle="tab"> Howrah Station</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section3" className="nav-link" data-toggle="tab"> Dum Dum Airpot</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section4" className="nav-link" data-toggle="tab"> Esplanade </a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section5" className="nav-link" data-toggle="tab"> Dalhousie</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section6" className="nav-link" data-toggle="tab">  Sector 5</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section7" className="nav-link" data-toggle="tab">  Unitech</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section8" className="nav-link" data-toggle="tab">  Ecospace</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section9" className="nav-link" data-toggle="tab">  New Market</a></li>
                            <li role="presentation"  className="nav-item"><a href="#Section10" className="nav-link" data-toggle="tab">  Park Street</a></li>
                        </ul>
                        <div className="tab-content tabs">
                            <div role="tabpanel" className="tab-pane fade show active" id="Section1">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 5.6km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 16mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section2">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 14.2km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 21mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section3">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 13.4km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 24mintss</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section4">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 9.0km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 20mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section5">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 12.4km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 18mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section6">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 5.3km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 10mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section7">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 10.4km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 17mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade" id="Section8">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 11.6km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 19mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade" id="Section9">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 9.6km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 20mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade" id="Section10">
                                <div className="row">
                                    <div className="col-lg-7">
                                        
                                        <ul className="icon">
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Distance</h4>
                                                <p><i className="fas fa-map-marker-alt"></i> 7.7km</p>
                                            </li>
                                            <li><hr/></li>
                                            <li>
                                                <h4 style={{color:"#b50000",fontWeight: "700"}}>Travelling Time</h4>
                                                <p><i className="fas fa-alarm-clock"></i> 16mints</p>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <img src={maprout} style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div> 
        </div>
    </div>
            <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471218.38561198546!2d88.04953310209929!3d22.676385752607995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1639495333443!5m2!1sen!2sin" width="100%" height="500" frameBorder="0"   allowfullscreen="" loading="lazy"></iframe>
            </div>
    </section> 
    <a style={{cursor:"pointer"}} href="#" className={ShowTop == true ? "back-to-top active" : "back-to-top"} id="backToTop">
                    <i className="fa fa-angle-double-up"></i>
                </a>

        </React.Fragment>


);

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Contact);