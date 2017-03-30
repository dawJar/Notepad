import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import OwnButton, { BACK_FROM_EDIT_NOTE, SAVE_EDITED_NOTE } from './OwnButton.jsx';
import TextArea, { EDIT_NOTE_CONTENT } from './TextArea.jsx';
import TextField, { EDIT_NOTE_TITLE } from './TextField.jsx';

import '../../sass/addEditNote.scss';


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
            <div className="add-edit-note-container">
                <OwnButton 
                    className="btn-fixed-back"
                    btnText="back" 
                    whichAction={ BACK_FROM_EDIT_NOTE }
                    handleOnClick={ this.handleButtonClick }
                    showAsIcon
                    iconStyle="glyphicon glyphicon-arrow-left"
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
                    className="pull-right"
                    btnText="save" 
                    whichAction={ SAVE_EDITED_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
            </div>
        );
    }
}

EditNote.propTypes = {
    setNavStyles: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
    currentContentOfEdditingNote: PropTypes.string.isRequired,
    currentTitleOfEdditingNote: PropTypes.string.isRequired,
    selectedNoteToEdit: PropTypes.string.isRequired,
    setContentOfEditingNote: PropTypes.string.isRequired,
    setTitleOfEditingNote: PropTypes.string.isRequired,
};

export default EditNote;