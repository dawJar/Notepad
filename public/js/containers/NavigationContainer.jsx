import React, { cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navigation from '../components/Navigation.jsx';


const mapStateToProps = state => ({
    userLogin: state.fetchNotes.userLogin
    // loginMessage: state.loginMessage.message,
    // signUpMessage: state.signUpMessage.message,
    // signUpNewUser: state.signUpMessage.addNewUser,
    // formInputFirstName: state.formValidation.firstName,
    // formInputLogin: state.formValidation.login,
    // formInputPassword: state.formValidation.password,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);