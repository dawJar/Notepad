import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownButtonItem from './DropdownButtonItem.jsx';


class OwnDropdownButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { 
            title,
            dropdownSelectItems,
            ...otherProps
        } = this.props;

        let selectItemsToRender = dropdownSelectItems.map((item, i) => {
            return (i === 3) ? 
                <MenuItem divider /> : 
                <DropdownButtonItem counter={ i } title={ item } { ...otherProps } />
        });

            
        return (
            <div>
                { title }
                <DropdownButton bsStyle={title.toLowerCase()} title="more" id={`dropdown-basic-${1}`}>
                    { selectItemsToRender }
                </DropdownButton>
            </div>
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