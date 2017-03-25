import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


class SelectOption extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { addNoteSelectCategory } = this.props;
        addNoteSelectCategory(event.target.value);
    }

    render() {
        let { 
            userNoteCategories, 
            addNewSelectedCategory 
        } = this.props;

        let optionsToRender = userNoteCategories.map(category => {
            return (category === addNewSelectedCategory) ?
            <option value={ category } selected>
                { category }
            </option> :
            <option value={ category } >
                { category }
            </option>
        });

        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl 
                    componentClass="select"
                    placeholder="select category"
                    onChange={ this.handleChange }
                >
                    {optionsToRender}
                </FormControl>
            </FormGroup>
        );
    }
}

SelectOption.propTypes = {
    // value: PropTypes.string.isRequired
};

export default SelectOption;