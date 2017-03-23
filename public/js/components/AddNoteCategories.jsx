import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import AddNoteSelectOption from './AddNoteSelectOption.jsx';
import AddNoteNewCategory from './AddNoteNewCategory.jsx';
import AddNoteButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE } from './AddNoteButtonGroup.jsx';


class AddNoteCategories extends Component {

    constructor(props) {
        super(props);
        this.handleButtonCLick = this.handleButtonCLick.bind(this);
    }

    handleButtonCLick (whichButton) {
        let { 
            addNoteAddNewCategory,
            addNewNoteCategory
        } = this.props;

        switch (whichButton) {

            case ADD_NEW_CATEGORY:
                addNoteAddNewCategory(addNewNoteCategory);
                break;

            case ADD_NEW_NOTE:
                
                break;
        
            default:
                break;

        }
    }

    render() {
        let { addNewNoteCategory, ...otherProps } = this.props;

        return (
            <div>
                {
                    (addNewNoteCategory) ?
                        <AddNoteNewCategory { ...otherProps } /> :                  
                        <AddNoteSelectOption { ...otherProps } /> 
                }
                <AddNoteButtonGroup 
                    addNewNoteCategory={ addNewNoteCategory }
                    handleOnClick={ this.handleButtonCLick } 
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