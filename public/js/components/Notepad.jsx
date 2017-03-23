import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import NotepadTabs from './NotepadTabs.jsx';


class Notepad extends Component {

    constructor(props) {
        super(props);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('cwm')
    //     console.log(nextProps)
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }

    componentWillMount() {
        this.props.fetchUserNotes()        
    }

    handleAddNewNote() {
        console.log('click')
    }

    render() {
        let { 
            anyNotes, 
            userNotes, 
            children,
            location: { pathname }, 
            ...otherProps
        } = this.props;
        
        let renderNotes = userNotes > 0;

        return (
            <div>
                {
                    (renderNotes) ?
                        { children } :
                        <Link
                            to={`${pathname}/add-note`}
                            onClick={this.handleAddNewNote}
                        >
                            You got no notes. Add new one!
                        </Link>
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