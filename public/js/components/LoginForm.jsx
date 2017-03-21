import React, { PropTypes, Component } from 'react';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
            location: { pathname }
        } = this.props;

        let loginStyle = pathname === '/login';

        return (
            <div>
                <form id="access-form" onSubmit={ this.handleSubmit }>

                    {
                        (!loginStyle) ? 
                            <label>
                                first name:
                                <input
                                    id="first-name-input"
                                    type="text"
                                    onChange={ this.handleFirstNameChange }
                                    required
                                />
                            </label> : null
                    }

                    <label>
                        login:
                        <input
                            id="login-input"
                            type="text"
                            onChange={ this.handleLoginChange }
                            required
                        />
                    </label>

                    <label>
                        password:
                        <input
                            id="password-input"
                            type="password"
                            onChange={ this.handlePasswordChange }
                            required
                        />
                    </label>

                    <input type="submit" value="sign up!" />
                </form>
                <h2>{ signUpMessage }</h2>
            </div>
        );
    }
}


export default LoginForm;