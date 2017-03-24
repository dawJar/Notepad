import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import AddNoteCategories from './AddNoteCategories.jsx';
import AddNoteTextArea from './AddNoteTextArea.jsx';
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
            addNewNote,
            addNewNoteCategory,
            addNewSelectedCategory,
            addNewNoteContent,
            currentNewCategory
        } = this.props;

        switch (whichButton) {

            case ADD_NEW_CATEGORY:
                addNoteAddNewCategory(addNewNoteCategory);
                break;

            case ADD_NEW_NOTE:
            // TODO: add title
                let title = 'default';
                let category = (addNewNoteCategory) ? currentNewCategory : addNewSelectedCategory;
                let content = addNewNoteContent;
                addNewNote(title, category, content);
                addNoteCurrentNewCategory('');
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