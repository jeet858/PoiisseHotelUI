
import React, { useState, useEffect, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import BodySection from '../components/BodySection'
import BookingSection from '../components/BookingSection'
import ThemeSwitcher from 'react-css-vars';
import 'bootstrap/dist/css/bootstrap.css';
import "../assets/css/generic.css";
import "../assets/css/animate.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/slick.css";
import "../assets/css/nice-select.css";
import "../assets/css/bootstrap-datepicker.css";
import "../assets/css/default.css";
import "../assets/css/font-awesome.min.css";
import Loader from './Loader';
import HomeContainer from './HomeContainer';
import RoomContainer from './RoomContainer';
import About from './About';
import Ammenities from '../components/Ammenities';
import Tarrif from '../components/Tarrif';
import Contact from './Contact';
import Terms from '../components/Terms'
import ImageUtil from "../utils/ImageUtil";
import ScrollToTop from '../components/Scroll';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Global, isDev } from '../utils/Env';
import { getCompanyId, getConfigInfo } from '../actions/HomeAction';
import { useWindowResizeListener } from '../utils/useHooks';
import { setMenuState, setMobileState } from '../actions/HomeAction';



const App = props => {
  
    const { width } = useWindowResizeListener();
    const { setMenuState, setMobileState } = props;

    // on resize menu observer
    useEffect(() => {
        if (width < 768) {
            setMenuState(false);
            setMobileState(true);
        } else {
            setMenuState(true);
            setMobileState(false);
        }
    }, [width, setMenuState, setMobileState]);
    useEffect(() => {
        props.getConfigInfo();
    }, [])

    Global.callback.getConfigInfo_onComplete = () => {
        props.getCompanyId(props.url);
   
      }
      Global.callback.getcompanydetails_onComplete = () =>{
        let favicon=document.getElementById("favicon");
        favicon.href=ImageUtil.getImage(props.companyDetails.favIconFileName)
      }

    return (
        <ThemeSwitcher elementId="root">
            <GoogleOAuthProvider clientId={props.companyDetailsCurrency ? props.companyDetailsCurrency.googleClientId : ''}>
                <Container fluid="true">
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<HomeContainer/>} >
                                <Route path="/" element={<Outlet/>}>
                                    <Route path="/" element={<BodySection/>} />
                                    <Route path='/about' element={<About/>}/>
                                    <Route path='/ammenities' element={<Ammenities/>}/>
                                    <Route path='/tarrif' element={<Tarrif/>}/>
                                    <Route path='/contact' element={<Contact/>}/>
                                    <Route path='/terms' element={<Terms/>}/>
                                </Route>
                            </Route>
                            <Route path='/room' element={<RoomContainer/>}>
                                <Route path="/" element={<Outlet/>}>
                                    <Route path='/' element={<BookingSection/>}/>
                                </Route>
                            </Route>
                            
                            
                        </Routes>
                        <ToastContainer autoClose={5000} />
                        <Loader />
                    </ScrollToTop>
                </Container>
            </GoogleOAuthProvider>
        </ThemeSwitcher>
    )
}

const mapStateToProps = state => ({
    url: state.HomeData.url,
    companyDetails:state.HomeData
})

export default connect(mapStateToProps, {getCompanyId,setMenuState, setMobileState,getConfigInfo})(App);
