import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


class AddNoteNewCategory extends Component {

    constructor(props) {
        super(props);
        this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
    }

    handleNewCategoryChange (event) {
        let { addNoteCurrentNewCategory } = this.props;
        addNoteCurrentNewCategory(event.target.value);
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <ControlLabel>Add new category name</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter category name here ;)"
                    onChange={ this.handleNewCategoryChange }
                />
            </div>
        );
    }
}

AddNoteNewCategory.propTypes = {
    // value: PropTypes.string.isRequired
};

export default AddNoteNewCategory;