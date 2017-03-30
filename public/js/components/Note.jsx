import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import Panel from 'react-bootstrap/lib/Panel';
import * as dropdownControl from './DropdownButtonItem.jsx';
import OwnDropdownButton from './OwnDropdownButton.jsx';


class Notes extends Component {

    constructor(props) {
        super(props);
        this.handleSelectMenuItem = this.handleSelectMenuItem.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.panelStyle !== nextProps.panelStyle ||
               this.props.title !== nextProps.title ||
               this.props.content !== nextProps.content;
    }

    handleSelectMenuItem(whichItem) {
        let { 
            currentActiveCategoryTab,
            setContentOfEditingNote,
            setTitleOfEditingNote,
            updateNoteImportance,
            setNoteToEdit,
            filteredNotes,
            removeNote,
            noteId,
        } = this.props;

        let btnStyle;

        switch (whichItem) {

            case dropdownControl.SET_IMPORTANT:
                btnStyle = 'primary';
                updateNoteImportance(currentActiveCategoryTab, noteId, btnStyle);
                break;

            case dropdownControl.SET_INFO:
                btnStyle = 'info';
                updateNoteImportance(currentActiveCategoryTab, noteId, btnStyle);
                break;

            case dropdownControl.SET_NORMAL:
                btnStyle = 'warning';
                updateNoteImportance(currentActiveCategoryTab, noteId, btnStyle);
                break;

            case dropdownControl.EDIT_NOTE:
                let selectedNote = filteredNotes.filter(note => note._id === noteId);
                setNoteToEdit(noteId);
                setTitleOfEditingNote(selectedNote[0].title);
                setContentOfEditingNote(selectedNote[0].content);
                browserHistory.push(`/notepad/edit-note`);
                break;
            
            case dropdownControl.REMOVE_NOTE:
                setNoteToEdit(noteId);
                removeNote(currentActiveCategoryTab, noteId);
                break;

            default:
                break;
        }
    }

    render() {
        let {
            title,
            content,
            category,
            panelStyle,
            ...otherProps
        } = this.props;

        let panelHeaderToRender = (
            <OwnDropdownButton
                title={title}
                handleSelectMenuItem={this.handleSelectMenuItem}
                { ...otherProps }
            />
        );

        return (
            <Panel 
                className="panel-margin"
                bsStyle={ panelStyle } 
                header={ panelHeaderToRender } 
            >
                <p>{ content }</p>
            </Panel>
        );
    }
}

Notes.propTypes = {
    filteredNotes: PropTypes.arrayOf(PropTypes.object.isRequired),
    currentActiveCategoryTab: PropTypes.number.isRequired,
    setContentOfEditingNote: PropTypes.func.isRequired,
    setTitleOfEditingNote: PropTypes.func.isRequired,
    updateNoteImportance: PropTypes.func.isRequired,
    setNoteToEdit: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired,
    noteId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    panelStyle: PropTypes.string.isRequired,
};

export default Notes;