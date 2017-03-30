import React, { Component, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavigationContainer from './NavigationContainer.jsx';
import Footer from '../components/Footer.jsx';

import '../../sass/appContainer.scss';


class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { 
            containerUnderNavStyle, 
            children, 
            ...otherProps 
        } = this.props;

        let childrenToShow = cloneElement(children, { ...otherProps });

        return (
            <div>
                <NavigationContainer />
                <div className={ containerUnderNavStyle } >
                    { childrenToShow }
                </div>
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.loginMessage.isUserLoggedIn,
    loginMessage: state.loginMessage.message,
    signUpNewUser: state.signUpMessage.addNewUser,
    signUpMessage: state.signUpMessage.message,
    formInputFirstName: state.formValidation.firstName,
    formInputPassword: state.formValidation.password,
    formInputLogin: state.formValidation.login,
    userLogin: state.fetchNotes.userLogin,
    containerUnderNavStyle: state.navbar.containerUnderNavStyle
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);