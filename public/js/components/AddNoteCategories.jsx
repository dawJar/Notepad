import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import AddNoteSelectOption from './AddNoteSelectOption.jsx';


class AddNoteCategories extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { ...otherProps } = this.props;
        // console.log(userNoteCategories);
        // let optionsToRender = userNoteCategories.map(category =>
        //     <AddNoteSelectOption value={category} />
        // );

        return (
            <div>

                <AddNoteSelectOption { ...otherProps } />
                <FormControl
                    type="text"
                    placeholder="Enter text"
                />
            </div>

        );
    }
}

// AddNoteCategories.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default AddNoteCategories;