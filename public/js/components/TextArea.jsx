import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


export const EDIT_NOTE_CONTENT = "EDIT_NOTE_CONTENT";
export const SET_NOTE_CONTENT = "SET_NOTE_CONTENT";

class TextArea extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { 
            actionType, 
            addNoteContent,
            setContentOfEditingNote
        } = this.props;

        switch (actionType) {
            
            case EDIT_NOTE_CONTENT:
                setContentOfEditingNote(event.target.value);
                break;

            case SET_NOTE_CONTENT:
                addNoteContent(event.target.value);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { 
            controlLabel, 
            valueText, 
            placeholder 
        } = this.props;

        return (
            <FormGroup controlId="form-control-textarea">
                <ControlLabel>{ controlLabel }</ControlLabel>
                <FormControl 
                    componentClass="textarea" 
                    placeholder={ placeholder } 
                    onChange={ this.handleChange }
                    value={ valueText }
                />
            </FormGroup>
        );
    }
}

TextArea.propTypes = {
    // value: PropTypes.string.isRequired
};

export default TextArea;