import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
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

// Notes.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Notes;