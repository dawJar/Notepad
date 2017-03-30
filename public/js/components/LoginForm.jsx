import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import TextField, { SET_FIRST_NAME, SET_PASSWORD, SET_LOGIN } from'./TextField.jsx';

import '../../sass/loginForm.scss';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let { setNavStyles, setContainerUnderNavStyles } = this.props;
        setNavStyles('navbar-login-style', 'Join us!');
        setContainerUnderNavStyles('container-under-nav-login');
    }

    componentWillUnmount() {
        let { setContainerUnderNavStyles } = this.props;
        setContainerUnderNavStyles('container-under-nav');
    }

    handleSubmit(event) {
        let {
            location: { pathname },
            formInputFirstName,
            formInputPassword,
            formInputLogin
        } = this.props;

        
        if (pathname === '/login') {
            this.props.attemptLogin(formInputLogin, formInputPassword);
        } else {
            this.props.attemptSingup(formInputFirstName, formInputLogin, formInputPassword);
        }
        
        event.preventDefault();
    }

    render() {
        let {
            signUpMessage,
            loginMessage,
            userLogin,
            location: { pathname },
            formInputFirstName,
            formInputPassword,
            formInputLogin,
            ...otherProps
        } = this.props;

        let loginStyle = pathname === '/login';

        return (
            <Form 
                id="accessForm" 
                className="login-form"
                onSubmit={ this.handleSubmit }
            >        
                <h2 className="additional-margin-bottom">
                    {  (!loginStyle && userLogin === '') ?
                        'Create new account' : 'Login to your account'
                    }
                </h2>
                {
                    (!loginStyle && userLogin === '') ? 
                        <TextField 
                            actionType={ SET_FIRST_NAME }
                            controlLabel="First name:" 
                            placeholder="Enter first name" 
                            valueText={ formInputFirstName }
                            { ...otherProps } 
                        /> : null      
                }

                {
                    (userLogin === '') ?
                        <div>
                            <TextField 
                                actionType={ SET_LOGIN }
                                controlLabel="Login:" 
                                placeholder="Enter login" 
                                valueText={ formInputLogin }
                                { ...otherProps } 
                            />

                            <TextField 
                                actionType={ SET_PASSWORD }
                                controlLabel="Password:" 
                                placeholder="Enter password" 
                                valueText={ formInputPassword }
                                type="password"
                                { ...otherProps } 
                            />

                            <FormGroup>
                                <Button type="submit" className="pull-right">
                                    { (loginStyle) ? 'Log in' : 'Sign in'}
                                </Button>
                            </FormGroup>
                            <h2>{ signUpMessage || loginMessage }</h2>
                        </div> : 
                        <div className="pull-right additional-margin-top">
                            <Link to="/notepad" className="go-to-notepad-button">
                                <Button bsSize="large">
                                    open notepad!
                                </Button>
                            </Link>
                        </div>
                }

            </Form>
        );
    }
}

LoginForm.propTypes = {
    setContainerUnderNavStyles: PropTypes.func.isRequired,
    formInputFirstName: PropTypes.string.isRequired,
    formInputPassword: PropTypes.string.isRequired,
    formInputLogin: PropTypes.string.isRequired,
    signUpMessage: PropTypes.string.isRequired,
    loginMessage: PropTypes.string.isRequired,
    setNavStyles: PropTypes.func.isRequired,
    userLogin: PropTypes.string.isRequired
};

export default LoginForm;