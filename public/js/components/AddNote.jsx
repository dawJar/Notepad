import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import AddNoteCategories from './AddNoteCategories.jsx';
import AddNoteTextArea from './AddNoteTextArea.jsx';
import AddNoteTextField, { SET_NOTE_TITLE } from './AddNoteTextField.jsx';
import AddNoteButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE } from './AddNoteButtonGroup.jsx';



class AddNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonCLick = this.handleButtonCLick.bind(this);
    }

    handleButtonCLick (whichButton) {
        let { 
            addNoteAddNewCategory,
            addNoteCurrentNewCategory,
            addNoteContent,
            addNoteCurrentTitle,
            addNewNote,
            addNewNoteCategory,
            addNewSelectedCategory,
            addNewNoteContent,
            currentNewCategory,
            currentTitle
        } = this.props;

        switch (whichButton) {

            case ADD_NEW_CATEGORY:
                addNoteAddNewCategory(addNewNoteCategory);
                break;

            case ADD_NEW_NOTE:
                let category = (addNewNoteCategory) ? currentNewCategory : addNewSelectedCategory;
                let title = currentTitle;
                let content = addNewNoteContent;
                addNewNote(title, category, content);
                addNoteCurrentNewCategory('');
                addNoteContent('');
                addNoteCurrentTitle('')
                browserHistory.push('/notepad');
                break;
        
            default:
                break;

        }
    }

    render() {
        let { ...otherProps } = this.props;

        return (
            <div>
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
                    handleOnClick={ this.handleButtonCLick } 
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