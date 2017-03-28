import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import TextField, { SET_FIRST_NAME, SET_PASSWORD, SET_LOGIN } from'./TextField.jsx';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        location.reload();
        browserHistory.push('/notepad');
    }

    render() {
        let {
            signUpMessage,
            loginMessage,
            location: { pathname },
            formInputFirstName,
            formInputPassword,
            formInputLogin,
            ...otherProps
        } = this.props;

        let loginStyle = pathname === '/login';

        return (
            <Form id="accessForm" onSubmit={ this.handleSubmit }>        
                
                {
                    (!loginStyle) ? 
                    <TextField 
                        actionType={ SET_FIRST_NAME }
                        controlLabel="First name:" 
                        placeholder="Enter first name" 
                        valueText={ formInputFirstName }
                        { ...otherProps } 
                    /> : null      
                }

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
                    <Button type="submit">
                        { (loginStyle) ? 'Log in' : 'Sign in'}
                    </Button>
                </FormGroup>

                {/*TEMP*/}
                <h2>{ signUpMessage || loginMessage }</h2>
            </Form>
        );
    }
}

export default LoginForm;