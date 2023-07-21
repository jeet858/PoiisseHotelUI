import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cityLife from '../assets/img/addstatick/190251640760856416.jpg';
import backgroundImage from '../assets/img/addstatick/34631643703825banner2.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import about1 from '../assets/img/addstatick/About1.jpg';
import about2 from '../assets/img/addstatick/about2.jpg';
import about3 from '../assets/img/addstatick/about3.jpg';
import about4 from '../assets/img/addstatick/about4.jpg';
import reception1 from '../assets/img/addstatick/reception1.jpg'

import { useNavigate, Link } from 'react-router-dom';
import Header2 from '../components/Header/Header2';



const About = (props) => {
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
      <Header2 />
      <section className="breadcrumb-area" style={{ backgroundImage: `url(${amm})` }}>
        <div className="container">
          <div className="breadcrumb-text">
            <span>The ultimate luxury</span>
            <h2 className="page-title">About Us</h2>

            <ul className="breadcrumb-nav">
              <li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }}>Home</a></li>
              <li className="active">About</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="abt_container text-block with-bg pt-115 pb-115" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-7 col-md-8 col-sm-10 wow fadeInLeft" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
              <div className="block-text mb-small">
                <div className="section-title mb-20">
                  <span className="title-tag">Take a tour</span>
                  <h2>About Us</h2>
                </div>
                <p>
                  <p>Welcome to Poiisse ! A Perfect m&eacute;lange&nbsp; of&nbsp; Kolkata&#39;s Grandeur and Hospitality. The splendor of Poiss&egrave; Is reflected in its unparalleled facilities and services. Strategically located in the hub of Kolkata, with nearness to the Business Centers and heart of the City.&nbsp; Offering a range of amenties along with a multifaceted experiences in cuisine, and entertainment. Poiiss&egrave; offers the flavours of Bypass Dhabba which serves a diverse variety like Mughlai, Tandoor,&nbsp; Chinese, with a specialty in Indian.&nbsp; Along with the sweetness of&nbsp; Hiirans Patisserie which has a fine collection of contemporary bakery with fresh and scrumptious pastries which will have you coming back for more, and the fresh brewed coffee at our very own Hiirans Cafe which serves pan Asian to fushion south Indian and a vast variety of continental cuisine. A luxury experience at our chic contemporary bar The Royale Terrace the perfect place to head for a fun evening where you can bask in the delightful ambiance with a view of the cities Hussle and bustle.&nbsp;</p>
                </p>

              </div>
            </div>
            <div className="col-lg-5 col-md-10 wow fadeInRight" data-wow-delay=".5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInRight" }}>

              <img src={reception1} alt="Img" />

            </div>
          </div>
          <div className="gallery mt-30 mb-60">
            <div className="row">
              <div className="col-lg-3 mt-30">
                <img src={about1} alt="Img" />
              </div>
              <div className="col-lg-3 mt-30">
                <img src={about2} alt="Img" />
              </div>
              <div className="col-lg-3 mt-30">
                <img src={about3} alt="Img" />
              </div>
              <div className="col-lg-3 mt-30">
                <img src={about4} alt="Img" />
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

export default connect(mapStateToProps, {})(About);