import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


export const SET_NOTE_CATEGORY = "SET_NOTE_CATEGORY";
export const EDIT_NOTE_TITLE = "EDIT_NOTE_TITLE";
export const SET_NOTE_TITLE = "SET_NOTE_TITLE";

class TextField extends Component {

    constructor(props) {
        super(props);
        this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
    }

    handleNewCategoryChange (event) {
        let { 
            addNoteCurrentNewCategory,
            addNoteCurrentTitle,
            setTitleOfEditingNote,
            actionType 
        } = this.props;

        switch (actionType) {
            case SET_NOTE_CATEGORY:
                addNoteCurrentNewCategory(event.target.value);
                break;

            case SET_NOTE_TITLE:
                addNoteCurrentTitle(event.target.value);
                break;

            case EDIT_NOTE_TITLE:
                setTitleOfEditingNote(event.target.value);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { 
            controlLabel,
            placeholder,
            valueText
        } = this.props;

        // let valueText = (title) ? currentTitle : currentNewCategory;

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

TextField.propTypes = {
    // value: PropTypes.string.isRequired
};

export default TextField;