import React, { PropTypes, Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { title, content, category } = this.props;

        return (
            <div>
                <p>note: { title }</p>
                <p>category: { category }</p>
                <p>content: { content }</p>
            </div>
        );
    }
}

// Notes.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Notes;