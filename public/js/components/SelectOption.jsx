import React, { PropTypes, Component } from 'react';
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
            addNewSelectedCategory,
            concatedCategories 
        } = this.props;

        let optionsToRender = concatedCategories.map(category => {
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
                    { optionsToRender }
                </FormControl>
            </FormGroup>
        );
    }
}

SelectOption.propTypes = {
    concatedCategories: PropTypes.arrayOf(PropTypes.string.isRequired),
    addNewSelectedCategory: PropTypes.string.isRequired,
    addNoteSelectCategory: PropTypes.func.isRequired
};

export default SelectOption;