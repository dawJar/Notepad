import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import SelectOption from './SelectOption.jsx';
import TextField, { SET_NOTE_CATEGORY } from './TextField.jsx';


class NoteCategory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { addNewNoteCategory, currentNewCategory, ...otherProps } = this.props;

        return (
            <div>
                {
                    (addNewNoteCategory) ?
                        <TextField 
                            actionType={ SET_NOTE_CATEGORY }
                            controlLabel="Add new category name" 
                            placeholder="Enter category name"
                            valueText={ currentNewCategory }
                            { ...otherProps } 
                        /> :                  
                        <SelectOption { ...otherProps } /> 
                }
            </div>

        );
    }
}

// NoteCategory.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default NoteCategory;