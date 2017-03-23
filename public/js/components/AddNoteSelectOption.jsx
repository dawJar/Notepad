import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


class AddNoteSelectOption extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { userNoteCategories } = this.props;
        let optionsToRender = userNoteCategories.map(category =>
            <option value={ category } >
                { category }
            </option>
        );

        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl 
                    componentClass="select"
                    placeholder="select category" 
                >
                    {optionsToRender}
                </FormControl>
            </FormGroup>
        );
    }
}

AddNoteSelectOption.propTypes = {
    // value: PropTypes.string.isRequired
};

export default AddNoteSelectOption;