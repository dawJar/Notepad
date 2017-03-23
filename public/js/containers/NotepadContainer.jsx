import React, { Component, cloneElement } from 'react';
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
    anyNotes: state.fetchNotes.anyNotes,
    userNotes: state.fetchNotes.notes,
    userNoteCategories: state.fetchNotes.userNoteCategories,
    addNewNoteCategory: state.addNote.addNewNoteCategory,
    currentNewCategory: state.addNote.currentNewCategory
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotepadContainer);