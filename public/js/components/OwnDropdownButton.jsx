import React, { PropTypes, Component } from 'react';
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
                <div className="pull-right">
                    <DropdownButton 
                        pullRight 
                        className="dropdown-btn"
                        bsStyle={title.toLowerCase()} 
                        title="more" 
                    >
                        { selectItemsToRender }
                    </DropdownButton>
                </div>
            </div>
        );
    }
}

OwnDropdownButton.propTypes = {
    dropdownSelectItems: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired
};

export default OwnDropdownButton;