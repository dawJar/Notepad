import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';


class Notepad extends Component {

    constructor(props) {
        super(props);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
    }

    handleAddNewNote() {
        // let { location: { pathname } } = this.props;
        // browserHistory.push(`${ pathname }/add-note`);
        console.log('click')
    }

    render() {
        let { anyNotes, userNotes, children, location: { pathname } } = this.props;
        let renderNotes = userNotes > 0;

        return (
            <div>
                {
                    (renderNotes) ?
                        <Tabs 
                            activeKey={1} 
                            onSelect={this.handleSelect} 
                            id="controlled-tab-example"
                        >
                            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                            <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
                        </Tabs> :
                        <Link
                            to={`${pathname}/add-note`}
                            onClick={this.handleAddNewNote}
                        >
                            add new note
                        </Link>
                }

                {children}
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