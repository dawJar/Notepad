import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import NotepadTabs from './NotepadTabs.jsx';
import OwnButton, { NOTEPAD_ADD_NOTE } from './OwnButton.jsx';

import '../../sass/notepad.scss';


class Notepad extends Component {

    constructor(props) {
        super(props);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
    }

    componentWillMount() {
        let { fetchUserNotes, currentActiveCategoryTab, setNavStyles } = this.props;
        fetchUserNotes(currentActiveCategoryTab);  
        setNavStyles('navbar-notepad-style', 'Notepad');
    }

    handleAddNewNote(whichButton) {
        let { 
            location: { pathname } 
        } = this.props;

        switch (whichButton) {
            case NOTEPAD_ADD_NOTE:
                browserHistory.push(`${pathname}/add-note`);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { 
            anyNotes, 
            userNotes, 
            children,
            location: { pathname }, 
            ...otherProps
        } = this.props;
        
        let renderNotes = userNotes.length > 0;

        return (
            <div className="notepad-container">
                {
                    (renderNotes) ?
                        <NotepadTabs 
                            userNotes={ userNotes }
                            { ...otherProps }
                        /> : 
                        <div className="no-notes-info-container">
                            <Link
                                to={ `${pathname}/add-note` }
                                onClick={ this.handleAddNewNote }
                            >
                                You got no notes. Add new one!
                            </Link>
                        </div>
                }

                <OwnButton 
                    className="btn-fixed-add-note"
                    bsSize="large"
                    btnText="Add note" 
                    whichAction={ NOTEPAD_ADD_NOTE }
                    handleOnClick={ this.handleAddNewNote }
                /> 

            </div>
        );
    }
}

Notepad.propTypes = {
    userNotes: PropTypes.arrayOf(PropTypes.object.isRequired),
    currentActiveCategoryTab: PropTypes.number.isRequired,
    fetchUserNotes: PropTypes.func.isRequired,
    setNavStyles: PropTypes.func.isRequired,
    anyNotes: PropTypes.bool.isRequired
};

export default Notepad;