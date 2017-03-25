import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import NotepadTabs from './NotepadTabs.jsx';
import OwnButton, { NOTEPAD_ADD_NOTE } from './OwnButton.jsx';


class Notepad extends Component {

    constructor(props) {
        super(props);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
    }

    componentWillMount() {
        let { fetchUserNotes, currentActiveCategoryTab } = this.props;
        fetchUserNotes(currentActiveCategoryTab);      
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
            <div>
                {
                    (renderNotes) ?
                        <NotepadTabs 
                            userNotes={ userNotes }
                            { ...otherProps }
                        /> : 
                        <Link
                            to={ `${pathname}/add-note` }
                            onClick={ this.handleAddNewNote }
                        >
                            You got no notes. Add new one!
                        </Link>
                }

                {
                    (renderNotes) ?
                        <OwnButton 
                            btnText="Add note" 
                            whichAction={ NOTEPAD_ADD_NOTE }
                            handleOnClick={ this.handleAddNewNote }
                        /> : null
                }

            </div>
        );
    }
}

// Notepad.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Notepad;