import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import NoteCategory from './NoteCategory.jsx';
import TextArea from './TextArea.jsx';
import OwnButton, { BACK_FROM_EDIT_NOTE } from './OwnButton.jsx';
import TextField, { EDIT_NOTE_TITLE } from './TextField.jsx';
import OwnButtonGroup, { ADD_NEW_CATEGORY, ADD_NEW_NOTE, CLEAR_FIELDS } from './OwnButtonGroup.jsx';


class EditNote extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick (whichButton) {
        // let { 
            
        // } = this.props;

        switch (whichButton) {

            case BACK_FROM_EDIT_NOTE:
                this.clearEditNoteData();
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
            ...otherProps 
        } = this.props;

        return (
            <div>
                <OwnButton 
                    btnText="back" 
                    whichAction={ BACK_FROM_EDIT_NOTE }
                    handleOnClick={ this.handleButtonClick }
                />
                {/*<NoteCategory { ...otherProps } />*/}
                <TextField 
                    actionType={ EDIT_NOTE_TITLE }
                    controlLabel="Edit note title" 
                    placeholder="Edit note title" 
                    valueText={ currentTitleOfEdditingNote }
                    { ...otherProps } 
                />
                {/*<TextArea { ...otherProps } />
                <OwnButtonGroup 
                    handleOnClick={ this.handleButtonClick } 
                    { ...otherProps }
                />*/}
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