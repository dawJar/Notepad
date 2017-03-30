import React, { PropTypes, Component } from 'react';
import SelectOption from './SelectOption.jsx';
import TextField, { SET_NOTE_CATEGORY } from './TextField.jsx';


class NoteCategory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { addNewNoteCategory, currentNewCategory, ...otherProps } = this.props;

        return (
            <div>
                {
                    (addNewNoteCategory) ?
                        <TextField 
                            actionType={ SET_NOTE_CATEGORY }
                            controlLabel="Add new category name" 
                            placeholder="Enter category name"
                            valueText={ currentNewCategory }
                            { ...otherProps } 
                        /> :                  
                        <SelectOption { ...otherProps } /> 
                }
            </div>

        );
    }
}

NoteCategory.propTypes = {
    addNewNoteCategory: PropTypes.bool.isRequired,
    currentNewCategory: PropTypes.string.isRequired
};

export default NoteCategory;