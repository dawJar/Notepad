import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


class AddNoteTextArea extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { addNoteContent } = this.props;
        addNoteContent(event.target.value);
    }

    render() {
        // console.log(this.props)
        return (
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl 
                    componentClass="textarea" 
                    placeholder="textarea" 
                    onChange={ this.handleChange }
                />
            </FormGroup>
        );
    }
}

AddNoteTextArea.propTypes = {
    // value: PropTypes.string.isRequired
};

export default AddNoteTextArea;