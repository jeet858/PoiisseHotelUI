import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import LogoSticky from '../../assets/img/addstatick/poiissehotelblack.png'
import { toggleMenuState } from "../../actions/HomeAction";

import "bootstrap/dist/css/bootstrap.css";

const Header = (props) => {
    const navigate = useNavigate();

    const [ShowTopBtn, setShowTopBtn] = useState(false);
    const [showmenu, setmenuShow] = useState(false);
    const [showicon, seticonShow] = useState(true);
    const showmenupannel = () => {
        setmenuShow(true);
        seticonShow(false);
    };
    const hidemenupannel = () => {
        setmenuShow(false);
        seticonShow(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const displayHeader = () => {
        return (
            <React.Fragment>
                {props.mobileState ?
                    <div>
                        <div className="site-logo d-md-none mobile-bar">
                            <header className={ShowTopBtn == false ? "header-absolute header-two sticky-header" : "header-absolute header-two sticky-header sticky-active"}>
                                <div className="container container-custom-one">
                                    <div className="nav-container d-flex align-items-center justify-content-between breakpoint-on">
                                        <div className={showmenu ? "nav-menu d-lg-flex align-items-center menu-on" : "nav-menu d-lg-flex align-items-center"} >

                                            {/* <div className="navbar-close">
                                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                            </div> */}
                                            <span className="mobile-close-icon" onClick={hidemenupannel}>
                                                ×
                                            </span>
                                            <div className="menu-items">
                                                <ul>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }}>Home</a></li>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/about`) }}>About</a></li>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/ammenities`) }}>Amenities</a></li>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/tarrif`) }}>Tarrif</a></li>
                                                    <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/contact`) }}>Contact</a></li>
                                                </ul>
                                            </div>
                                            <div className="nav-pushed-item"></div>
                                            <div className="nav-push-item">
                                                <div className="header-info d-lg-flex align-items-center">
                                                    <div className="item">
                                                        <i className="fal fa-phone"></i>

                                                        <span>Phone Number</span>
                                                        <a href="tel:+91 6292 260 400">
                                                            <h5 className="title">+91 6292 260 400</h5>
                                                        </a>
                                                    </div>
                                                    <div className="item">
                                                        <i className="fal fa-envelope"></i>
                                                        <span>Email Address</span>
                                                        <a href="mailto:info@webmail.com">
                                                            <h5 className="title">{props.companyDetails.adminEmail}</h5>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="site-logo">
                                            <a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }} className="main-logo"><img src={props.companyDetails.companyFooterLogo} alt="Logo" /></a>
                                            <a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }} className="sticky-logo"><img src={LogoSticky} alt="Logo" /></a>
                                        </div>

                                        {showicon ? <div className="navbar-toggler" onClick={showmenupannel}>
                                            <span></span><span></span><span></span>
                                        </div> :
                                            <div className="navbar-toggler active" onClick={hidemenupannel}>
                                                <span></span><span></span><span></span>
                                            </div>}
                                    </div>
                                </div>
                            </header>

                        </div>
                    </div> :
                    <header className={ShowTopBtn == false ? "header-absolute2 header-two sticky-header" : "header-absolute header-two sticky-header sticky-active"}>
                        <div className="container container-custom-one">
                            <div className="nav-container d-flex align-items-center justify-content-between">
                                <div className="nav-menu d-lg-flex align-items-center">

                                    <div className="navbar-close">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>
                                    <div className="menu-items">
                                        <ul>
                                            <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }}>Home</a></li>
                                            <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/about`) }}>About</a></li>
                                            <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/ammenities`) }}>Amenities</a></li>
                                            <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/tarrif`) }}>Tarrif</a></li>
                                            <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/contact`) }}>Contact</a></li>
                                        </ul>
                                    </div>

                                    <div className="nav-pushed-item"></div>
                                </div>


                                <div className="site-logo second-header">
                                    <a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }} className="main-logo"><img src={props.companyDetails.companyFooterLogo} alt="Logo" /></a>
                                    {/* <a style={{cursor:"pointer"}} onClick={()=>{navigate(`/`)}} className="sticky-logo"><img src={props.companyDetails.companyLogo} alt="Logo" /></a> */}
                                    <a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }} className="sticky-logo"><img src={LogoSticky} alt="Logo" /></a>
                                </div>
                                <div className="nav-push-item">
                                    <div className="header-info d-lg-flex align-items-center">
                                        <div className="item">
                                            <i className="fal fa-phone"></i>

                                            <span>Phone Number</span>
                                            <a href="tel:+91 6292 260 400">
                                                <h5 className="title">+91 6292 260 400</h5>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <i className="fal fa-envelope"></i>
                                            <span>Email Address</span>
                                            <a href="mailto:info@webmail.com">
                                                <h5 className="title">{props.companyDetails.adminEmail}</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-toggler">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </header>}
            </React.Fragment>)
    }
    return (
        <React.Fragment>
            {/* <div className=" p-0-mob">
            {props.mobileState ? (
                <Navbar
                    bg="transparent"
                    sticky="top"
                    expand="lg border-bottom"
                    className="breakpoint-on"
                    onToggle={() => props.toggleMenuState(!props.menuState)}
                    expanded={props.menuState}
                >
                    {" "}
                    {displayHeader()}
                </Navbar>
            ) : (
                displayHeader()
            )} */}
            {displayHeader()}

        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    companyid: state.HomeData.companyid,
    companyDetails: state.HomeData.companyDetails,
    mobileState: state.HomeData.isMobileMenu,
    menuState: state.HomeData.menuState

});

export default connect(mapStateToProps, {
    toggleMenuState
})(Header);
