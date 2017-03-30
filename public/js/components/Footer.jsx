import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer" >
                <div className="footer-container">
                    <Row className="items-row">
                        <Col xs={3}>
                            <a href="https://github.com/dawJar/Notepad">GitHub</a>
                        </Col>
                        <Col xs={6} />
                        <Col xs={3}>
                            <p className="pull-right">
                                created by dejvid
                            </p>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

export default Footer;