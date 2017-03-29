import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import MainJumbotron from './MainJumbotron.jsx';


class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainJumbotron />
            </div>
        );
    }
}

// Index.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Index;