import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


export const SET_NOTE_CATEGORY = "SET_NOTE_CATEGORY";
export const SET_NOTE_TITLE = "SET_NOTE_TITLE";

class AddNoteTextField extends Component {

    constructor(props) {
        super(props);
        this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
    }

    handleNewCategoryChange (event) {
        let { 
            addNoteCurrentNewCategory,
            addNoteCurrentTitle,
            actionType 
        } = this.props;

        switch (actionType) {
            case SET_NOTE_CATEGORY:
                addNoteCurrentNewCategory(event.target.value);
                break;

            case SET_NOTE_TITLE:
                addNoteCurrentTitle(event.target.value);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { 
            currentNewCategory,
            currentTitle,
            controlLabel,
            placeholder,
            title
        } = this.props;

        let valueText = (title) ? currentTitle : currentNewCategory;

        return (
            <FormGroup>
                <ControlLabel>{ controlLabel }</ControlLabel>
                <FormControl
                    type="text"
                    placeholder={ placeholder }
                    onChange={ this.handleNewCategoryChange }
                    value={ valueText }
                />
            </FormGroup>
        );
    }
}

AddNoteTextField.propTypes = {
    // value: PropTypes.string.isRequired
};

export default AddNoteTextField;