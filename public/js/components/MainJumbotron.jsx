import React, { PropTypes, Component } from 'react';
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
                <div>
                    <h2>Best online notepad ever!</h2>
                    <p>start using it</p>
                    <p>are you new? sign up! its simple.</p>
                    <Button 
                        className="pull-right"
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

// MainJumbotron.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default MainJumbotron;