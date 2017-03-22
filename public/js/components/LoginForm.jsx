import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let { loginUser } = nextProps;
        if (loginUser) {
            browserHistory.push('/notepad');
            location.reload();
            // nextProps.fetchUsersNotes();
        } 
            
    }

    handleSubmit(event) {
        let {
            location: { pathname },
            formInputFirstName,
            formInputLogin,
            formInputPassword
        } = this.props;

        if (pathname === '/login') {
            this.props.attemptLogin(formInputLogin, formInputPassword);
        } else {
            this.props.attemptSingup(formInputFirstName, formInputLogin, formInputPassword);
        }
        event.preventDefault();
    }

    handleFirstNameChange(event) {
        this.props.inputFirstNameChange(event.target.value);
    }

    handleLoginChange(event) {
        this.props.inputLoginChange(event.target.value);
    }

    handlePasswordChange(event) {
        this.props.inputPasswordChange(event.target.value);
    }

    render() {
        let {
            signUpMessage,
            loginMessage,
            location: { pathname }
        } = this.props;

        let loginStyle = pathname === '/login';

        return (
            <Form id="accessForm" onSubmit={ this.handleSubmit }>        
                
                {
                    (!loginStyle) ? 
                    <FormGroup controlId="inputFirstName">
                        <ControlLabel>
                            First name:
                        </ControlLabel>
                        <FormControl 
                            controlId="inputFirstName"
                            type="text" 
                            placeholder="First name" 
                            onChange={ this.handleFirstNameChange } 
                            required 
                        />
                    </FormGroup> : null      
                }

                <FormGroup controlId="inputLogin">
                    <ControlLabel>
                        Login:
                    </ControlLabel>
                    <FormControl 
                        controlId="inputLogin"
                        type="text" 
                        placeholder="Login" 
                        onChange={ this.handleLoginChange } 
                        required
                    />
                </FormGroup>

                <FormGroup controlId="inputPassword">
                    <ControlLabel>
                        Password:
                    </ControlLabel>
                    <FormControl 
                        controlId="inputPassword"
                        type="password" 
                        placeholder="Password" 
                        onChange={ this.handlePasswordChange } 
                        required 
                    />
                </FormGroup>

                <FormGroup>
                    <Button type="submit">
                        Sign in
                    </Button>
                </FormGroup>

                {/*TEMP*/}
                <h2>{ signUpMessage || loginMessage }</h2>
            </Form>
        );
    }
}


export default LoginForm;