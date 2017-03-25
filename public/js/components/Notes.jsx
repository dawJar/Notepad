import React, { PropTypes, Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { userNotes, userNoteCategories } = this.props;

        return (
            <div>
                
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