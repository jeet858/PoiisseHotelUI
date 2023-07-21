import React, { Component } from 'react';
import { connect } from "react-redux";

import ImageUtil from '../utils/ImageUtil';
import loadingGIF from '../assets/img/loading1.gif';

class Loader extends Component {

    constructor(props) {
        super(props);

        this.loaderStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgb(181, 0, 0)',


            top: document.querySelector('#root').offsetTop,
            left: document.querySelector('#root').offsetLeft,

            bottom: '0%',
            right: '0%',

            height: '100%',
            width: '100%',

            position: 'fixed',
            zIndex: '9999',
        }
    }

    handleScrolling(loadingStatus) {
        let action = loadingStatus ? 'add' : 'remove';
        document.querySelector('body').classList[action]('stop-scrolling');
    }

    render() {

        //disable scrolling
        this.handleScrolling(this.props.loadStatus)

        return (
            (this.props.loadStatus) ?
                <div style={this.loaderStyle}>
                    {/* <img src={loadingGIF} width='50px' height='50px' alt="loading" /> */}
                    <div className="preloader d-flex align-items-center justify-content-center">
        <div className="cssload-container">
            <div className="cssload-loading"><i></i><i></i><i></i><i></i></div>
        </div>
    </div>
                </div>
                : null
        );
    }
}

const mapStateToProps = state => ({
    loadStatus: state.api.isLoadingData
});

export default connect(mapStateToProps, null)(Loader);




