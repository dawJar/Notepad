import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';


class MainJumbotron extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        browserHistory.push('/signup');
    }

    render() {
        return (
            <Jumbotron className="main-jumbotron">
                <div className="container">
                    <h2>Best online notepad ever!</h2>
                    <p className="additional-margin-top">start using it</p>
                    <p>are you new? sign up! its simple.</p>
                    <Button 
                        className="pull-right"
                        bsSize="large"
                        bsStyle="danger"
                        onClick={this.handleClick}
                    >
                        Sign up
                    </Button>
                </div>
            </Jumbotron>
        );
    }
}

export default MainJumbotron;