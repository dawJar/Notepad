import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MainJumbotron from './MainJumbotron.jsx';
import IndexItem from './IndexItem.jsx';

import '../../sass/index.scss';


class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainJumbotron />
                <Grid>
                    <h3 className="items-header">about:</h3>
                    <Row className="items-row">
                        <IndexItem 
                            icon="fa fa-users fa-4x"
                            title="Growing community"
                        />
                        <IndexItem 
                            icon="fa fa-sticky-note-o fa-5x"
                            title="Easy to use"
                        />
                    </Row>
                    <Row className="items-row">
                        <IndexItem 
                            icon="fa fa-mobile fa-5x"
                            title="Mobile friendly"
                        />
                        <IndexItem 
                            icon="fa fa-google fa-5x"
                            title="Material design"
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

// Index.propTypes = {
// increment: PropTypes.func.isRequired,
// incrementIfOdd: PropTypes.func.isRequired,
// incrementAsync: PropTypes.func.isRequired,
// decrement: PropTypes.func.isRequired,
// counter: PropTypes.number.isRequired
// };

export default Index;