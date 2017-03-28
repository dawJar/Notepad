import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';


export const SET_IMPORTANT = 0;
export const SET_INFO = 1;
export const SET_NORMAL = 2;
export const EDIT_NOTE = 4;
export const REMOVE_NOTE = 5;

class OwnDropdownButton extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(indexOfSelectedItem) {
        let { handleSelectMenuItem } = this.props;
        handleSelectMenuItem(indexOfSelectedItem);
    }

    render() {
        let {
            title,
            counter
        } = this.props;

        return (
            <MenuItem
                eventKey={ counter }
                onSelect={ this.handleSelect }
            >
                {title}
            </MenuItem>
        );
    }
}

// OwnDropdownButton.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default OwnDropdownButton;