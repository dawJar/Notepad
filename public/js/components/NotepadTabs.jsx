import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';


class NotepadTabs extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { userNotes, children } = this.props;

        return (
            <Tabs
                activeKey={1}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
            >
                <Tab eventKey={1} title="Tab 1">
                    content
                    { children }
                </Tab>
            </Tabs>
        );
    }
}

// NotepadTabs.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default NotepadTabs;