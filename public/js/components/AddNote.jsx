import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import NoteCategory from './NoteCategory.jsx';
import TextArea from './TextArea.jsx';
import OwnButton, { BACK_FROM_ADD_NOTE } from './OwnButton.jsx';
import TextField, { SET_NOTE_TITLE } from './TextField.jsx';
import OwnButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE, CLEAR_FIELDS } from './OwnButtonGroup.jsx';


class AddNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
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
            addNewNoteCategory,
            currentNewCategory,
            addNewSelectedCategory,
            currentTitle,
            addNewNoteContent,
            addNewNote
        } = this.props;

        let category = (addNewNoteCategory) ? 
                            currentNewCategory : addNewSelectedCategory;
        let title = currentTitle;
        let content = addNewNoteContent;
        addNewNote(title, category, content);
    }

    clearAddNoteFields() {
        let { 
            addNoteCurrentNewCategory,
            addNoteContent,
            addNoteCurrentTitle
        } = this.props;

        addNoteCurrentNewCategory('');
        addNoteContent('');
        addNoteCurrentTitle('');
        addNoteContent('');
    }

    render() {
        let { currentTitle, ...otherProps } = this.props;

        return (
            <div>
                <OwnButton 
                    btnText="back" 
                    whichAction={ BACK_FROM_ADD_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
                <NoteCategory { ...otherProps } />
                <TextField 
                    actionType={ SET_NOTE_TITLE }
                    controlLabel="Note title" 
                    placeholder="Enter note title" 
                    valueText={ currentTitle }
                    { ...otherProps } 
                />
                <TextArea { ...otherProps } />
                <OwnButtonGroup 
                    handleOnClick={ this.handleButtonClick } 
                    { ...otherProps }
                />
            </div>
        );
    }
}

// AddNote.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default AddNote;