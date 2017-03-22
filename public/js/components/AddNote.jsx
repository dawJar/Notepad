import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import AddNoteCategories from './AddNoteCategories.jsx';


class AddNote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // let { userNotes, children } = this.props;

        return (
            <div>
                <AddNoteCategories />
                add NOTE
            </div>
        );
    }
}

// AddNote.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default AddNote;