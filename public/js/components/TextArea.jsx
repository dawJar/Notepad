import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


class TextArea extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { addNoteContent } = this.props;
        addNoteContent(event.target.value);
    }

    render() {
        let { addNewNoteContent } = this.props;

        return (
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl 
                    componentClass="textarea" 
                    placeholder="textarea" 
                    onChange={ this.handleChange }
                    value={ addNewNoteContent }
                />
            </FormGroup>
        );
    }
}

TextArea.propTypes = {
    // value: PropTypes.string.isRequired
};

export default TextArea;