import React, { PropTypes, Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import MainJumbotron from './MainJumbotron.jsx';
import IndexItem from './IndexItem.jsx';

import '../../sass/index.scss';


class Index extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { setNavStyles } = this.props;
        setNavStyles('navbar-index-style', 'Hello!');
    }

    render() {
        return (
            <div>
                <MainJumbotron />
                <Grid>
                    <h3 className="items-header">about:</h3>
                    <Row>
                        <IndexItem 
                            icon="fa fa-users fa-4x"
                            title="Growing community."
                        />
                        <IndexItem 
                            icon="fa fa-sticky-note-o fa-5x"
                            title="Easy to use."
                        />
                    </Row>
                    <Row>
                        <IndexItem 
                            icon="fa fa-mobile fa-5x"
                            title="Mobile friendly."
                        />
                        <IndexItem 
                            icon="fa fa-suitcase fa-5x"
                            title="A suitcase."
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    setNavStyles: PropTypes.func.isRequired
};

export default Index;