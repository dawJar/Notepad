import React, { PropTypes, Component } from 'react';


class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer" >
                <div className="container">
                    <p>
                        sticy footer text
                    </p>
                </div>
            </footer>
        );
    }
}

// Footer.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired

export default Footer;