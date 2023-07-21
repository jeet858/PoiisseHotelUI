import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  useRef,
  useLayoutEffect,
} from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {
  Container,
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import welcomepoiisse from "../assets/img/addstatick/253221644482797welcome.jpg";
import cityLife from "../assets/img/addstatick/190251640760856416.jpg";
import Booking from "./Booking";
import OurHotel from "./OurHotel";
import Connectivity from "./Connectivity";
import Featureroomsection from "./Featureroomsection";
import Roomtypesection from "./Roomtypesection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../assets/css/body.css";
import Slider from "react-slick";
import Header from "./Header/Header";
let imageList;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: 0,
        left: "auto",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: "auto",
        left: 0,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BodySection = (props) => {
  const [ShowTop, setShowTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    });
  }, []);

  const section1 = (e) => {
    if (props.companyDetails != null && props.companyDetails.banners != null) {
      return props.companyDetails.banners.map((item, id) => {
        return (
          <div
            className="single-banner d-flex align-items-center justify-content-center"
            key={item.bannerId}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="banner-content text-center">
                    <span
                      className="promo-tag"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      The Perfect Base for You
                    </span>
                    <h1
                      className="title"
                      data-animation="fadeInLeft"
                      data-delay=".9s"
                    >
                      {item.bannerText}
                      <br />
                    </h1>
                    <ul>
                      <li data-animation="fadeInUp" data-delay="1.1s">
                        <a
                          className="main-btn btn-filled"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/about`);
                          }}
                        >
                          take a tour
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-bg"
              style={{ backgroundImage: `url(${item.bannerImage})` }}
            ></div>
            <div className="banner-overly"></div>
          </div>
        );
      });
    }
  };
  return (
    <React.Fragment>
      <Header />
      <div className="body-section">
        <section className="banner-area banner-style-two" id="bannerSlider">
          <Slider {...settings}>{section1()}</Slider>
        </section>
        <section className="booking-form">
          <Booking />
        </section>

        <section className="about-section pt-60 pb-60 text-block">
          <div className="container">
            <div
              className="row align-items-center justify-content-center wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="col-lg-7 element-to-moveRight">
                <div className="text-img text-center text-lg-left mb-small">
                  <img src={welcomepoiisse} alt="Image" />
                </div>
              </div>
              <div
                className="col-lg-5 col-md-8 col-sm-10 wow fadeInRight  element-to-moveLeft"
                data-wow-delay=".5s"
              >
                <div className="block-text">
                  <div className="section-title mb-20">
                    <span className="title-tag">Take a tour</span>
                    <h2>
                      Welcome <b style={{ color: "#b50000" }}>To Poiisse !</b>
                    </h2>
                  </div>
                  <p>
                    Welcome to Poiisse ! A Perfect m&eacute;lange&nbsp; of&nbsp;
                    Kolkata&#39;s Grandeur and Hospitality. The splendor of
                    Poiss&egrave; Is reflected in its unparalleled facilities
                    and services. Strategically located in the hub of Kolkata,
                    with nearness to the Business Centers and heart of the City.
                    It is designed specifically for the business traveler
                    offering multifaceted experiences in cuisine, and
                    entertainment.&nbsp; Discover a new&nbsp; stay experience
                    where luxury and comfort is the key essence.
                  </p>
                  <a
                    className="main-btn btn-filled mt-40"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/about`);
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right-bottom">
            <div className="about-bottom-img">
              <img src={welcomepoiisse} alt="" />
            </div>
          </div>
        </section>

        <section className="core-feature-section bg-white pt-60 pb-60">
          <OurHotel />
        </section>

        <section className="text-block bg-black with-pattern pt-60 pb-60">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                <div className="block-text">
                  <div className="section-title mb-20">
                    <span className="title-tag">City Life </span>
                    <h2>Kolkata</h2>
                    <h3>A city of heritage!</h3>
                  </div>
                  <p className="pr-50">
                    <span
                      style={{
                        fontFamily: "archivo,sans-serif",
                        fontSize: "17px",
                      }}
                    >
                      Kolkata city of heritage, culture, food and business has
                      inspired visitors for centuries. The heritage capital of
                      India, Kolkata has a distinct charm, and is quickly
                      propelling itself into a business hub as well. Set like a
                      jewel the city offers Park Street, Victoria Memorial and
                      the Heritage lanes of New Market along with the upcoming
                      corporate hub in Sector V Salt Lake. Poiisse is
                      stragically located to cater to the city life of the
                      travelers and making the Kolkata experience more blissful.
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-10 order-1 order-lg-2 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div
                  className="video-wrap video-wrap-two mb-small"
                  style={{ backgroundImage: `url(${cityLife})` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="pattern-wrap">
            <div className="pattern"></div>
          </div>
        </section>

        <section className="frm_connectivity">
          <Connectivity />
        </section>

        <section className="room-type-section pt-60 pb-60">
          <Roomtypesection />
        </section>
        <section className="feature-room-section pt-60 pb-60">
          <Featureroomsection />
        </section>

        <a
          style={{ cursor: "pointer" }}
          href="#"
          className={ShowTop == true ? "back-to-top active" : "back-to-top"}
          id="backToTop"
        >
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  companyid: state.HomeData.companyid,
  companyDetails: state.HomeData.companyDetails,
});

export default connect(mapStateToProps, {})(BodySection);
