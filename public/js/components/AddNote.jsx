import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import OwnButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE, CLEAR_FIELDS } from './OwnButtonGroup.jsx';
import OwnButton, { BACK_FROM_ADD_NOTE } from './OwnButton.jsx';
import TextArea, { SET_NOTE_CONTENT } from './TextArea.jsx';
import TextField, { SET_NOTE_TITLE } from './TextField.jsx';
import NoteCategory from './NoteCategory.jsx';

import '../../sass/addEditNote.scss';


class AddNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentWillMount() {
        let { userLogin, setNavStyles } = this.props;

        setNavStyles('navbar-add-edit-style', 'Add note');
        if (userLogin === '') 
            browserHistory.push('/login');
    }

    handleButtonClick (whichButton) {
        let { 
            addNoteAddNewCategory,
            addNewNoteCategory,
            fetchUserNotes, 
            currentActiveCategoryTab
        } = this.props;

        switch (whichButton) {

            case ADD_NEW_CATEGORY:
                addNoteAddNewCategory(addNewNoteCategory);
                break;

            case ADD_NEW_NOTE:
                this.addNewNoteToDb();
                this.clearAddNoteFields();
                this.setActiveTab();
                browserHistory.push('/notepad');
                break;
            
            case CLEAR_FIELDS:
                this.clearAddNoteFields();
                break;
            
            case BACK_FROM_ADD_NOTE:
                this.clearAddNoteFields();
                browserHistory.push('/notepad');
                break;

            default:
                break;
        }
    }

    setActiveTab() {
        let { 
            addNewNoteCategory, 
            userNoteCategories,
            setActiveCategoryOfNotes 
        } = this.props;

        if (addNewNoteCategory)
            setActiveCategoryOfNotes(userNoteCategories.length);
    }

    addNewNoteToDb() {
        let {
            addNewSelectedCategory,
            addNewNoteCategory,
            currentNewCategory,
            addNewNoteContent,
            currentTitle,
            addNewNote
        } = this.props;

        let category = (addNewNoteCategory) ? 
                            currentNewCategory : addNewSelectedCategory;
        let content = addNewNoteContent;
        let title = currentTitle;
        addNewNote(title, category, content);
    }

    clearAddNoteFields() {
        let { 
            addNoteCurrentNewCategory,
            addNoteCurrentTitle,
            addNoteContent
        } = this.props;

        addNoteCurrentNewCategory('');
        addNoteCurrentTitle('');
        addNoteContent('');
    }

    render() {
        let { 
            currentTitle, 
            addNewNoteContent, 
            ...otherProps 
        } = this.props;

        return (
            <div className="add-edit-note-container">
                <OwnButton 
                    className="btn-fixed-back"
                    btnText="back" 
                    whichAction={ BACK_FROM_ADD_NOTE }
                    handleOnClick={ this.handleButtonClick }
                    showAsIcon
                    iconStyle="glyphicon glyphicon-arrow-left"
                />
                <NoteCategory { ...otherProps } />
                <TextField 
                    actionType={ SET_NOTE_TITLE }
                    controlLabel="Note title" 
                    placeholder="Enter note title" 
                    valueText={ currentTitle }
                    { ...otherProps } 
                />
                <TextArea 
                    actionType={ SET_NOTE_CONTENT }
                    controlLabel="Note content"
                    placeholder="Enter note content"
                    valueText={ addNewNoteContent }
                    { ...otherProps } 
                />
                <OwnButtonGroup 
                    handleOnClick={ this.handleButtonClick } 
                    { ...otherProps }
                />
            </div>
        );
    }
}

AddNote.propTypes = {
    currentTitle: PropTypes.string.isRequired,
    addNewNoteContent: PropTypes.string.isRequired,
    addNoteCurrentNewCategory: PropTypes.func.isRequired,
    addNoteCurrentTitle: PropTypes.func.isRequired,
    addNoteContent: PropTypes.func.isRequired,
    addNewSelectedCategory: PropTypes.func.isRequired,
    addNewNoteCategory: PropTypes.bool.isRequired,
    currentNewCategory: PropTypes.string.isRequired,
    addNewNoteContent: PropTypes.string.isRequired,
    currentTitle: PropTypes.string.isRequired,
    addNewNote: PropTypes.func.isRequired,
    fetchUserNotes: PropTypes.func.isRequired,
    currentActiveCategoryTab: PropTypes.number.isRequired
};

export default AddNote;