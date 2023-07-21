import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cityLife from '../assets/img/addstatick/190251640760856416.jpg';
import backgroundImage from '../assets/img/addstatick/34631643703825banner2.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import reception from '../assets/img/addstatick/16616947931644844271reception.jpg';
import rooms from '../assets/img/addstatick/19288274521644843680room.jpg';
import Executiveroom from '../assets/img/addstatick/1582748391650686428AVK01887.jpg';
import Deluxeroom from '../assets/img/addstatick/5849979141644827218deluxe.jpg';
import SDeluxeroom from '../assets/img/addstatick/9784020011644828575sdelux.jpg';
import corridor from '../assets/img/addstatick/210901644630381IMG_20220128_161940.jpg';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from '../components/Header/Header2';


const Tarrif = (props) => {
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
    <section class="breadcrumb-area" style={{backgroundImage: `url(${amm})`}}>
        <div class="container">
            <div class="breadcrumb-text">
                <span>The ultimate luxury</span>
                <h2 class="page-title">Tarrif</h2>

                <ul class="breadcrumb-nav">
                    <li><a style={{cursor:"pointer"}} onClick={()=>{navigate(`/`)}}>Home</a></li>
                    <li class="active">Tarrif</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="tarrif_section">
        <div class="container pb-115 pt-115">
            <div class="row">
                
                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={Executiveroom}/>
                            <div class="over-layer">
                            </div>
                        </div>
                        <div class="team-content">
                            <h3 class="team-title">Executive Room</h3>
                            <span class="post"><i class="fas fa-rupee-sign"></i> 3300</span>
                            <ul>
                                <li><p class="description"><i class="fa fa-check"></i> 170 sqft with Attach Bath</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Including Breakfast</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Mini Bar</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Cupboard</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Free WIFI</p></li>

                            </ul>
                        </div>
                        <a href="https://booking.poiissehotel.com/rooms/executive" class="read"><i class="fa fa-check"></i> Book Now</a>
                    </div>
                </div>
         
                 
                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={Deluxeroom}/>
                            <div class="over-layer">
                            </div>
                        </div>
                        <div class="team-content">
                            <h3 class="team-title">Deluxe Room</h3>
                            <span class="post"><i class="fas fa-rupee-sign"></i> 3500</span>
                            <ul>
                                <li><p class="description"><i class="fa fa-check"></i> 190 sqft with Attach Bath</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Including Breakfast</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Mini Bar</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Cupboard</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Free WIFI</p></li>

                            </ul>
                        </div>
                        <a href="https://booking.poiissehotel.com/rooms/deluxe-room" class="read"><i class="fa fa-check"></i> Book Now</a>
                    </div>
                </div>
         
                 
                <div class="col-md-4 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={SDeluxeroom}/>
                            <div class="over-layer">
                            </div>
                        </div>
                        <div class="team-content">
                            <h3 class="team-title">Super Deluxe Room</h3>
                            <span class="post"><i class="fas fa-rupee-sign"></i> 3800</span>
                            <ul>
                                <li><p class="description"><i class="fa fa-check"></i> 210 sqft with Attach Bath</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Including Breakfast</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Mini Bar</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Cupboard</p></li>
                                <li><p class="description"><i class="fa fa-check"></i> Free WIFI</p></li>

                            </ul>
                        </div>
                        <a href="https://booking.poiissehotel.com/rooms/super-delux" class="read"><i class="fa fa-check"></i> Book Now</a>
                    </div>
                </div>
         
                 

                 
            </div>
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

export default connect(mapStateToProps, {})(Tarrif);