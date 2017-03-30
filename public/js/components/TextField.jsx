import React, { PropTypes, Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


export const SET_NOTE_CATEGORY = "SET_NOTE_CATEGORY";
export const EDIT_NOTE_TITLE = "EDIT_NOTE_TITLE";
export const SET_NOTE_TITLE = "SET_NOTE_TITLE";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_LOGIN = "SET_LOGIN";

class TextField extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        let { 
            addNoteCurrentNewCategory,
            setTitleOfEditingNote,
            addNoteCurrentTitle,
            inputFirstNameChange,
            inputPasswordChange,
            inputLoginChange,
            actionType 
        } = this.props;

        let { value } = event.target;

        switch (actionType) {
            case SET_NOTE_CATEGORY:
                addNoteCurrentNewCategory(value);
                break;

            case SET_NOTE_TITLE:
                addNoteCurrentTitle(value);
                break;

            case EDIT_NOTE_TITLE:
                setTitleOfEditingNote(value);
                break;

            case SET_FIRST_NAME:
                inputFirstNameChange(value);
                break;

            case SET_PASSWORD:
                inputPasswordChange(value);
                break;

            case SET_LOGIN:
                inputLoginChange(value);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { 
            controlLabel,
            placeholder,
            valueText,
            type
        } = this.props;

        type = (type === undefined) ? 'text' : type;

        return (
            <FormGroup>
                <ControlLabel>{ controlLabel }</ControlLabel>
                <FormControl
                    type={ type }
                    placeholder={ placeholder }
                    onChange={ this.handleChange }
                    value={ valueText }
                    required
                />
            </FormGroup>
        );
    }
}

TextField.propTypes = {
    addNoteCurrentNewCategory: PropTypes.func.isRequired,
    setTitleOfEditingNote: PropTypes.func.isRequired,
    inputFirstNameChange: PropTypes.func.isRequired,
    inputPasswordChange: PropTypes.func.isRequired,
    addNoteCurrentTitle: PropTypes.func.isRequired,
    inputLoginChange: PropTypes.func.isRequired,
    controlLabel: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    actionType: PropTypes.string.isRequired,
    valueText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default TextField;