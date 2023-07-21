import React, { } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomeContainer = props => {



	return (
		<React.Fragment>
			{/* <Header /> */}
			<Outlet />
			<Footer />

		</React.Fragment>
	);
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(HomeContainer);
