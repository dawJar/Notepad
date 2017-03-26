import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import OwnDropdownButton from './OwnDropdownButton.jsx';
import * as dropdownControl from './DropdownButtonItem.jsx';


class Notes extends Component {

    constructor(props) {
        super(props);
        this.handleSelectMenuItem = this.handleSelectMenuItem.bind(this);
    }

    handleSelectMenuItem(whichItem) {
        let { 
            updateNoteImportance,
            noteId
         } = this.props;

        switch (whichItem) {

            case dropdownControl.SET_IMPORTANT:
                updateNoteImportance(noteId, 'primary');
                break;

            case dropdownControl.SET_INFO:
                updateNoteImportance(noteId, 'info');
                break;

            case dropdownControl.SET_NORMAL:
                updateNoteImportance(noteId, 'success');
                break;

            case dropdownControl.EDIT_NOTE:
                console.log('edit');
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
            currentActiveCategoryTab,
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
            <Panel header={ panelHeaderToRender } bsStyle={ panelStyle } >
                {
                    (currentActiveCategoryTab === 0) ? <p>category: {category}</p> : null
                }
                <p>content: {content}</p>
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