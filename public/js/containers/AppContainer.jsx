import React, { cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavigationContainer from './NavigationContainer.jsx';


const AppContainer = ({ children, ...otherProps }) => {

    let childrenToShow = cloneElement(children, { ...otherProps });

    return (
        <div>
            <NavigationContainer />
            { childrenToShow }
        </div>
    );
}

const mapStateToProps = state => ({
    isUserLoggedIn: state.loginMessage.isUserLoggedIn,
    loginMessage: state.loginMessage.message,
    signUpMessage: state.signUpMessage.message,
    signUpNewUser: state.signUpMessage.addNewUser,
    formInputFirstName: state.formValidation.firstName,
    formInputLogin: state.formValidation.login,
    formInputPassword: state.formValidation.password,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);