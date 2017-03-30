import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import OwnButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE, CLEAR_FIELDS } from './OwnButtonGroup.jsx';
import OwnButton, { BACK_FROM_EDIT_NOTE, SAVE_EDITED_NOTE } from './OwnButton.jsx';
import TextArea, { EDIT_NOTE_CONTENT } from './TextArea.jsx';
import TextField, { EDIT_NOTE_TITLE } from './TextField.jsx';
import NoteCategory from './NoteCategory.jsx';


class EditNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    
    componentWillMount() {
        let { setNavStyles } = this.props;
        setNavStyles('navbar-add-edit-style', 'Edit note');
    }

    handleButtonClick (whichButton) {
        let { 
            updateNote,
            currentContentOfEdditingNote,
            currentTitleOfEdditingNote,
            selectedNoteToEdit 
        } = this.props;

        switch (whichButton) {

            case BACK_FROM_EDIT_NOTE:
                this.clearEditNoteData();
                browserHistory.push('/notepad');
                break;

            case SAVE_EDITED_NOTE:
                updateNote(selectedNoteToEdit, 
                            currentTitleOfEdditingNote, 
                            currentContentOfEdditingNote);
                browserHistory.push('/notepad');
                break;

            default:
                break;
        }
    }

    clearEditNoteData() {
        let { setContentOfEditingNote, setTitleOfEditingNote } = this.props;
        setTitleOfEditingNote('');
        setContentOfEditingNote('');
    }

    render() {
        let { 
            currentTitleOfEdditingNote,
            currentContentOfEdditingNote,
            ...otherProps 
        } = this.props;

        return (
            <div>
                <OwnButton 
                    btnText="back" 
                    whichAction={ BACK_FROM_EDIT_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
                <TextField 
                    actionType={ EDIT_NOTE_TITLE }
                    controlLabel="Edit note title" 
                    placeholder="Edit note title" 
                    valueText={ currentTitleOfEdditingNote }
                    { ...otherProps } 
                />
                <TextArea 
                    actionType={ EDIT_NOTE_CONTENT }
                    controlLabel="Edit note content"
                    placeholder="Edit note content"
                    valueText={ currentContentOfEdditingNote }
                    { ...otherProps } 
                />
                <OwnButton 
                    btnText="save" 
                    whichAction={ SAVE_EDITED_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
            </div>
        );
    }
}

// EditNote.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default EditNote;