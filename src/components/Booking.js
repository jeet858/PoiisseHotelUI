import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Row, Card, Button, Accordion, Modal,InputGroup } from 'react-bootstrap';


const Booking = (props) => {
     const openInNewTab = (url) => {
        console.log("hello")
        window.open("https://app.axisrooms.com/beV2/searchHotel.html?paxInfo=2%7C0%7C%7C&allHotels=true&newBe=true&productId=179291&bookingEngineId=4331&rooms=1&searchId=-1&searchNumber=1", '_blank', 'noreferrer');
      };
    return (
        <React.Fragment>
            <div className="container">
                <div className="booking-form-inner">

                    <Form  >
                    <div className="row align-items-end">
                            <div className="col-lg-3 col-md-6">
                                <div className="inputs-filed mt-30">
                                    <label htmlFor="arrival-date">Arrival Date</label>
                                    <div className="icon"><i className="fal fa-calendar-alt"></i></div>
                                    <input type="text" value="13-03-2023" name="start_date" id="arrival-date" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="inputs-filed mt-30">
                                    <label htmlFor="departure-date">Departure Date</label>
                                    <div className="icon"><i className="fal fa-calendar-alt"></i></div>
                                    <input type="text" value="14-03-2023" name="end_date"
                                        id="departure-date" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="inputs-filed mt-30">
                                    <label htmlFor="guests">Guests</label>
                                    <select name="adults" id="guests">
                                        <option value="" disabled selected>Select From Here</option>
                                        <option value="1">1</option>
                                        <option value="2" selected>2</option>
                                        <option value="4">4</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="inputs-filed mt-30">
                                    <button role="link"onClick={() => openInNewTab()}>check availability</button>
                                </div>
                            </div>
                        </div>
                </Form>
                </div>
            </div>

        </React.Fragment>
    );

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Booking);

