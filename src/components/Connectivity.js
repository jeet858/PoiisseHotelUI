import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from '../components/Header/Header2';


import Sealdah from '../assets/img/addstatick/12590622611645005005005-train-station-1.png'


const Connectivity = (props) => {
    const navigate = useNavigate();


    return (
        <React.Fragment>
            <div className="frm_connectivity">
                <div className="containers">
                    <div className="connectivity_section">

                        <div className="section-title text-center mb-20">
                            <span className="title-tag"> Land Mark destinations </span>
                            <h2>Connectivity</h2>
                            <p>Poiisse is strategically located from the IT Hubs at New Town, Salt Lake & the traditional business hubs of central Kolkata.</p>
                        </div>

                        <div className="horizontal-tab" role="tabpanel">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Section11">

                                <Row>
                                    <Col sm={12}>
                                        <ul className="nav-pills " role="tablist">

                                            <Nav variant="tabs" className='justify-content-center'>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section11"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/12590622611645005005005-train-station-1.png" /></div>
                                                            <span className="place_name">Sealdah Station</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 5.6 Km. away </span>
                                                    </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section12"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/2598472311645005063004-train-station.png" /></div>
                                                            <span className="place_name">Howrah Station</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 14.2 Km. away </span>
                                                    </li>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section13"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/9934814221645005023airport.png" /></div>
                                                            <span className="place_name">Kolkata Airport</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 13.4 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section14"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/1011228531645005051002-shopping-mall-1.png" /></div>
                                                            <span className="place_name">Esplanade</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 9.0 km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section15"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/9920600361645005116007-office.png" /></div>
                                                            <span className="place_name">Dalhousie</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 12.4 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section16"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/4843178731645005177010-it.png" /></div>
                                                            <span className="place_name">Sector 5</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 5.3 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section17"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/18867355441645005169009-business-and-trade.png" /></div>
                                                            <span className="place_name">Unitech</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 10.4 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section18"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/16456788011645005189006-work-from-home.png" /></div>
                                                            <span className="place_name">Ecospace</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 11.6 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section19"><li role="presentation" className="nav-item">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/14493529221645005197001-shopping-mall.png" /></div>
                                                            <span className="place_name">New Market</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 9.6 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section20"><li role="presentation" className="nav-item">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/19193150161645005212008-briefcase.png" /></div>
                                                            <span className="place_name">Park Street</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 7.7 Km. away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Section22"><li role="presentation" className="nav-item ">
                                                            <div className="div_img"><img src="https://poiissehotel.com/uploads/connectivity/12333728951650968553science_city.png" /></div>
                                                            <span className="place_name">Science City</span>
                                                            <span className="distance_name"><i className="fas fa-map-marker-alt"></i> 1 away </span>
                                                    </li></Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </ul>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="tab-content tabs">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Section11">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section11">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14737.794607048008!2d88.37903587853754!3d22.562317313007455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a0276575af846fb%3A0xd4838dc9f28e0c02!2sSealdah%20Railway%20Station%20No%201%20%26%202%2C%20Sealdah%2C%20Raja%20Bazar%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.5690575!2d88.3720316!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644655951735!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section12">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section12">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29475.424013298205!2d88.3429314553327!3d22.563090182803794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a027793e322b5b1%3A0x252e90291f4157f5!2sHowrah%20Railway%20Station%2C%20Howrah%2C%20West%20Bengal!3m2!1d22.5830002!2d88.3372909!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670563204!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section13">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section13">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58933.85717064611!2d88.38510049173087!3d22.60280114208619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39f89faa59df6903%3A0xdb1444043648b83!2sDum%20Dum%20Airport%20(CCU)%2C%20Jessore%20Road%2C%20Dum%20Dum%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.6531496!2d88.4448719!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670639543!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section14">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section14">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29477.7815713335!2d88.35522105532456!3d22.55205828633716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a0277a7947ce0e9%3A0x2a88a253644280db!2sEsplanade%20Metro%20Rail%20Station%2C%20Jawaharlal%20Nehru%20Road%2C%20Esplanade%2C%20Dharmatala%2C%20Esplanade%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.564941899999997!2d88.3516987!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670721158!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section15">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section15">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29477.167107488447!2d88.35588350532672!3d22.55493408541619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a0277a422fbff35%3A0xf9e612e4662efa08!2sDalhousie%20Square%2C%20RN%20Mukherjee%20Road%2C%20Lal%20Dighi%2C%20Lal%20Bazar%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.5707299!2d88.3508346!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670789623!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section16">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section16">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14737.31870810603!2d88.41197968624081!3d22.566769827768557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.5735314!2d88.4331189!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670845610!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section17">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section17">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29474.44465133632!2d88.42673925533605!3d22.567671481336046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a020ad24f09ce93%3A0x2cb4e3b7f016840e!2sUnitech%20Infospace%20IT%2FITES%20SEZ%2C%20Street%20No%200368%2C%20DH%20Block(Newtown)%2C%20Action%20Area%20I%2C%20Newtown%2C%20New%20Town%2C%20West%20Bengal!3m2!1d22.5746519!2d88.48223899999999!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670922939!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section18">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section18">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29474.14117186148!2d88.43127600533707!3d22.56909093088126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a020ac6499c8499%3A0x17c545e20b241d8d!2sEcospace%20Business%20Park%2C%20Street%20Number%20372%2C%20Action%20Area%20II%2C%20Newtown%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.5858027!2d88.4899995!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644670968125!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section19">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section19">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29478.271510188973!2d88.35588350532291!3d22.549765037071488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a02778053fb6e6f%3A0x148e965ca79fc580!2sNew%20Market%20%2F%20Hogg%20Market%2C%20Bertram%20Street%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.5603005!2d88.35290599999999!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644671040506!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section20">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section20">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29478.30250832921!2d88.3558835053228!3d22.549619937117946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a02770e57b33743%3A0x76896b81976ccd02!2sPark%20Street%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.55445!2d88.34984999999999!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644671108179!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Section22">
                                                    <div role="tabpanel" className="tab-pane fade show active" id="Section22">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29478.30250832921!2d88.3558835053228!3d22.549619937117946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a02770e57b33743%3A0x76896b81976ccd02!2sPark%20Street%2C%20Kolkata%2C%20West%20Bengal!3m2!1d22.55445!2d88.34984999999999!4m5!1s0x3a027428a963f4f5%3A0x2d6c862f69ee4d67!2sByepass%20Dhaba%2C%201A%2C%20Bangaon%20-%20Kulpi%20Rd%2C%20Sec-B%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700105!3m2!1d22.552704499999997!2d88.406105!5e0!3m2!1sen!2sin!4v1644671108179!5m2!1sen!2sin" height="330" width="100%" frameBorder="0"></iframe>

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
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Connectivity);