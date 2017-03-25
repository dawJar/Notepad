import React, { PropTypes, Component } from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';


export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

class OwnButtonGroup extends Component {

    constructor(props) {
        super(props);
        this.handleAddNewCategory = this.handleAddNewCategory.bind(this);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
        this.handleClearFields = this.handleClearFields.bind(this);
    }

    handleAddNewCategory () {
        let { handleOnClick } = this.props;
        handleOnClick(ADD_NEW_CATEGORY);
    }

    handleAddNewNote () {
        let { handleOnClick } = this.props;
        handleOnClick(ADD_NEW_NOTE);    
    }

    handleClearFields () {
        let { handleOnClick } = this.props;
        handleOnClick(CLEAR_FIELDS);    
    }

    render() {
        let { addNewNoteCategory, ...otherProps } = this.props;
        let categoryButtonText = (addNewNoteCategory) ? 'Select category' : 'Add new category';

        return (
            <ButtonGroup>
                <Button onClick={ this.handleClearFields } >
                    Clear fields
                </Button>
                <Button onClick={ this.handleAddNewCategory } >
                    { categoryButtonText }
                </Button>
                <Button onClick={ this.handleAddNewNote } >
                        Add note
                </Button>
            </ButtonGroup>
        );
    }
}

// OwnButtonGroup.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default OwnButtonGroup;