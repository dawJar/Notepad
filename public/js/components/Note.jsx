import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class Notes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { 
            title, 
            content, 
            category, 
            currentActiveCategoryTab 
        } = this.props;

        let test = (
            <div>
                { title }
                <DropdownButton bsStyle={title.toLowerCase()} title="more" key={1} id={`dropdown-basic-${1}`}>
                    <MenuItem eventKey="1">Important</MenuItem>
                    <MenuItem eventKey="2">Done</MenuItem>
                    <MenuItem eventKey="3">Info</MenuItem>
                    <MenuItem eventKey="3">Warning</MenuItem>
                </DropdownButton>
            </div>
        );

        return (
            <Panel header={ test }>
                {
                    (currentActiveCategoryTab === 0) ? <p>category: { category }</p> : null
                }
                <p>content: { content }</p>
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