import React, { PropTypes, Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class IndexItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { icon, title } = this.props;

        return (
            <Col sm={6}>
                <Row className="items-row">
                    <Col xs={4} className="index-item-icon">
                        <i className={ icon } aria-hidden="true"></i>
                    </Col>
                    <Col xs={8} className="index-item-title">
                        { title }
                    </Col>
                </Row>
            </Col>
        );
    }
}

IndexItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default IndexItem;