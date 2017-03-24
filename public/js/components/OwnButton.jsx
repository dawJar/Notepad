import React, { PropTypes, Component } from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


export const BACK_FROM_ADD_NOTE = 'BACK_FROM_ADD_NOTE';

class OwnButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let { whichAction, handleOnClick } = this.props;

        switch (whichAction) {
            case BACK_FROM_ADD_NOTE:
                handleOnClick(BACK_FROM_ADD_NOTE);
                break;
        
            default:
                break;
        }
    }

    render() {
        let { btnText } = this.props;

        return (
            <ButtonToolbar>
                <Button onClick={ this.handleClick } >
                    { btnText }
                </Button>
            </ButtonToolbar>
        );
    }
}

OwnButton.propTypes = {
    // value: PropTypes.string.isRequired
};

export default OwnButton;