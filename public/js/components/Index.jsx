import React, { PropTypes, Component } from 'react';
import Button from 'react-bootstrap/lib/Button';


class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button bsSize="large" active>react-bootstrap works</Button>
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