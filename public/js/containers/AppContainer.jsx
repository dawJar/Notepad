import React, { cloneElement } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'


const AppContainer = ({ children, ...otherProps }) => {

    let childrenToShow = cloneElement(children, { ...otherProps });

    return (
        <div>
            { childrenToShow }
        </div>
    );
}

const mapStateToProps = state => ({
    signUpMessage: state.signUpMessage,
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