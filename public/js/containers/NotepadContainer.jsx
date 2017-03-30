import React, { Component, cloneElement } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Notepad from '../components/Notepad.jsx';


class NotepadContainer extends Component {

    constructor(props) {
        super(props);
    }   

    render() {
        let { children, ...otherProps } = this.props;
        let childrenToShow = cloneElement(children, { ...otherProps }); 

        return (
            <div>
                { childrenToShow }
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    userNoteCategories: state.fetchNotes.userNoteCategories,
    concatedCategories: state.fetchNotes.concatedCategories,
    userLogin: state.fetchNotes.userLogin,
    anyNotes: state.fetchNotes.anyNotes,
    userNotes: state.fetchNotes.notes,
    addNewSelectedCategory: state.addNote.addNewSelectedCategory,
    addNewNoteCategory: state.addNote.addNewNoteCategory,
    currentNewCategory: state.addNote.currentNewCategory,
    addNewNoteContent: state.addNote.addNewNoteContent,
    currentTitle: state.addNote.currentTitle,
    currentActiveCategoryTab: state.notepad.currentActiveCategoryTab,
    notesOfCurrentActiveTab: state.notepad.notesOfCurrentActiveTab,
    dropdownSelectItems: state.notepad.dropdownSelectItems,
    currentContentOfEdditingNote: state.editNote.currentContentOfEdditingNote,
    currentTitleOfEdditingNote: state.editNote.currentTitleOfEdditingNote,
    selectedNoteToEdit: state.editNote.selectedNoteToEdit
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotepadContainer);