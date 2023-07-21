import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import backgroundImage from '../assets/img/addstatick/34631643703825banner2.jpg';
import amm from '../assets/img/addstatick/amm.jpg';
import { useNavigate, Link } from 'react-router-dom';
import Header2 from '../components/Header/Header2';


const Terms = (props) => {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<Header2 />
			<section className="breadcrumb-area" style={{ backgroundImage: `url(${amm})` }}>
				<div className="container">
					<div className="breadcrumb-text">
						<span>The ultimate luxury</span>
						<h2 className="page-title">TERMS OF USE</h2>

						<ul className="breadcrumb-nav">
							<li><a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }}>Home</a></li>
							<li className="active">TERMS OF USE</li>
						</ul>
					</div>
				</div>
			</section>


			<section>
				<div id="section-about">
					<div className="section sigma_about-sec">
						<div className="container">
							<div className="row">

								<div className="col-lg-12">
									<div className="sigma_about style-8 ps-lg-4 py-0 py-lg-5">
										<h3 className="title"><span className="primary-color">TERMS OF USE</span></h3>


									</div>
									<div className="sigma_about-content">
										<p><h4>&nbsp;</h4>

											<ul>
												<li>Hotel Standard Check-in time is 1400 hours IST and check-out time is 1200 hours.</li>
												<li>Early check-in and late check-out are available on subject to availability.</li>
												<li>Individual Cancellation, No-Show and Amendment Policy<strong>:&nbsp;</strong>Cancellation made 3 days prior to the arrival date shall not incur any cancellation charges &lsquo;beyond 1-night retention charges&rsquo; will be applicable.</li>
												<li>Group Cancellation (5 rooms and above): Group cancellation made 25 days prior to the arrival date shall incur cancellation charges &lsquo;beyond 100% will be charged through length of stay.</li>
												<li>All standard policies pertaining to hotel/ hospitality industry are applicable, when specific reservation policy is not mentioned in the &ldquo;Reservation Confirmation&rdquo; document.</li>
											</ul>

											<h4><strong>PAYMENT TERMS POLICY</strong></h4>

											<ul>
												<li>A pre-authorisation will be taken on your credit card under the name booking is made for the total stay on your arrival. Early check-in and late check-out are chargeable as per the Hotel policy. It is mandatory for guests to present valid photo identification at the time of check-in. Such documents can be either an Indian Aadhaar Card, Indian Driver&rsquo;s License, Indian Voter ID card or Indian or International passport. PAN cards are not accepted. Hotel reserves the right to refuse check-in in the absence of a valid identification document.</li>
												<li>Payment can be made using the credit card, payment gateway link, deposit in the bank account or demand draft before the due date.</li>
												<li>Applicable Taxes &ndash; Taxes are as applicable at the time of reservation.</li>
												<li>An extension of stay at the Hotel is liable to be offered at rate/offer applicable at the time the extension request is made. In case, the original offer at which the reservation was booked has expired at that time, the hotel is not liable to offer a room at the original rates but at current rates on offer.</li>
												<li>Certain privileged booking rates or special offers are not eligible for cancellation, refund or any change. The Customer is therefore advised to check the room description and any such conditions carefully prior to making a booking. Hotel shall not be liable to cancel or refund any monies or alter any bookings if booking is made under such privileged booking rates or special offers.</li>
												<li>Upon cancellation of booking, the refund of the booking amount will be initiated. The booking amount after deduction of cancellation charges and taxes, as applicable, will be credited into the bank account of the Customer using the same payment mode (i.e. debit card/ credit card/ net-banking and any electronic mode) by which the booking was made by the Customer. The refund process may take 10-15 business days.</li>
												<li>In case the booking amount is paid using credit card, the refund will be processed on the credit card.</li>
												<li>Children up-to 5 Years of age can stay free (cribs subject to availability). Additional charges may be applicable for children between 5 and 12 years. 13 years will be charged as per extra adult rate.</li>
												<li>In keeping with our heightened security procedures, we request you to provide your photo-identity proof while checking-in. Indian Nationals can present any of the following which is mandatory: Passport, Driving License, Voter ID Card, Pan Card. Foreign Nationals are required to present their passport and valid visa.</li>
											</ul>

											<h4><strong>STANDARD TERMS AND CONDITIONS</strong></h4>

											<ol>
												<li>No gatherings and parties of any nature are allowed in the room. The Hotel reserves the right to evict any additional occupants in the room.</li>
												<li>This reservation is not transferable.</li>
												<li>In the event of no-show, a fee of one night&rsquo;s room charge (inclusive of any applicable prevailing government tax) will be charged to your credit card provided at the time of reservation or as per any revised conditions of booking as per the offer.</li>
												<li>Hotel reserves the right to send guests away from the Hotel due to their conduct and behaviour or for any other safety, security, medical reasons. This applies in particular, if Guests do not observe instructions given by Hotel employees, express themselves in a discriminating manner, harass or endanger other guests.</li>
												<li>Guests will not be permitted to compromise the health, safety and security aspects of the Hotel at any point of time.</li>
												<li>Guests are bound to produce an original proof of identity at the time arrival in the Hotel</li>
												<li>Special terms of offer will be applicable for the respective bookings and in case of conflict, the terms of such special offers will prevail.</li>
												<li>Guests are not allowed to bring food and beverage from outside in the Hotel or order food from outside the Hotel.</li>
												<li>The Hotel undertakes no liability for the shelf life of the food which is taken away to the Hotel after an event at the Hotel or taken outside the Hotel for private consumption.</li>
												<li>In case of conflict in the actual bill provided to you after the receipt of services, the terms of the bill will prevail.</li>
												<li>Neatness and hygiene should be adequately maintained by the Guest. The Guest should always adhere to the safety, security and hygiene advise duly provided by the Hotel and should avoid breaching the same. The Guest will be solely responsible for any such violation if identified.</li>
												<li>All the assets and valuables of the Hotel should be duly maintained adequately and should not be damaged or destroyed. The Hotel has the discretion to levy any charges in future if it is proven beyond doubt that such damage/destruction to the asset of the Hotel (both movable and immovable) have been done or caused by the Guest.</li>
												<li>If you have any allergies, sensitivities or intolerance to, but not limited to: a particular fabric, material, cleaning product or food, it is not Hotel&rsquo;s responsibility to advise Hotel management prior to arrival.</li>
												<li>Your valuables can be stored in a safety deposit box in your room or the hotel can store your valuables upon request. The hotel is entitled to collect a charge for storage of these items.</li>
												<li>In case the items you wish to store are exceptionally valuable you must notify the hotel before storing. The hotel may refuse to store this kind of valuables.</li>
												<li>Management and staff work hard to provide a safe and secure environment. We do everything possible to ensure a secure environment is maintained and we ask that our guests do also. The Hotel takes no responsibility for any personal possessions that are lost, stolen or misplaced whilst on the premises due to the acts and omissions of the guests themselves.</li>
												<li>Lost property found on the premises is logged and kept in a secure location for a period of three (3) months. Thereafter items are either disposed of or donated to charity. The Hotel accepts no responsibility for contacting individuals in relation to lost property. Perishable items retrieved from rooms after check out are only held until close of business that day.</li>
												<li>Claimed items can be collected from the hotel with valid identification or alternatively the hotel can arrange postage on behalf of the guest at their expense.</li>
												<li>The Hotel is not responsible for damage or disappearance of vehicles kept in the parking area. The hotel is obliged to clearly express in the parking area that the area is not supervised and the hotel is not responsible for the property kept in there.</li>
												<li>Valet parking is always at the Guest&rsquo;s risk and advise from the Security Team needs to be strictly adhered with by the Guest at the time of checking in. Hotel will not be accountable for loss of any valuables from such parked vehicles.</li>
												<li>The Company reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be posted on this website immediately. Please check the latest information posted herein to inform yourself of any changes.</li>
												<li>We do our best to ensure reservation arrangements are satisfactory, however, the Hotel does not accept any liability for any loss financial or otherwise, travel delay, injury, damage, additional expenses or inconvenience caused directly or indirectly by any events which are beyond our control.&nbsp;These include, but not limited to, flight delays or cancellations, civil disturbance, defects in vehicles, strikes, theft, acts of terrorism, natural disaster, war, fire, floods, acts of God, acts of Government or of any other authorities, changes to Government regulations, accident to or failure of machinery or equipment, maintenance requirements or industrial action.</li>
												<li>The transport to the airport is provided as an ancillary service and the Hotel is not accountable to whatsoever happens to the guests during such transits</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<a style={{ cursor: "pointer" }} onClick={() => { navigate(`/`) }} className="back-to-top" id="backToTop">
				<i className="fal fa-angle-double-up"></i>
			</a>

		</React.Fragment>


	);

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Terms);