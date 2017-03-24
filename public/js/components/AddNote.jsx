import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import AddNoteCategories from './AddNoteCategories.jsx';
import AddNoteTextArea from './AddNoteTextArea.jsx';
import OwnButton, { BACK_FROM_ADD_NOTE } from './OwnButton.jsx';
import AddNoteTextField, { SET_NOTE_TITLE } from './AddNoteTextField.jsx';
import AddNoteButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE, CLEAR_FIELDS } from './AddNoteButtonGroup.jsx';


class AddNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (whichButton) {
        let { 
            addNoteAddNewCategory,
            addNewNoteCategory
        } = this.props;

        switch (whichButton) {

            case ADD_NEW_CATEGORY:
                addNoteAddNewCategory(addNewNoteCategory);
                break;

            case ADD_NEW_NOTE:
                this.addNewNoteToDb();
                this.clearAddNoteFields();
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
        let { ...otherProps } = this.props;

        return (
            <div>
                <OwnButton 
                    btnText="back" 
                    whichAction={ BACK_FROM_ADD_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
                <AddNoteCategories { ...otherProps } />
                <AddNoteTextField 
                    actionType={ SET_NOTE_TITLE }
                    controlLabel="Note title" 
                    placeholder="Enter note title" 
                    title
                    { ...otherProps } 
                />
                <AddNoteTextArea { ...otherProps } />
                <AddNoteButtonGroup 
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