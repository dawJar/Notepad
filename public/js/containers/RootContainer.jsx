import React, { Component } from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';
import AppContainer from './AppContainer.jsx';
import Counter from '../components/Counter.jsx';
import Test from '../components/Test.jsx';

import '../../sass/main.scss';


class RootContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={ store } >
                <Router history={ browserHistory } >

                    <Route path="/" component={ AppContainer } >

                        <IndexRoute component={ Counter } />

                        <Route path="/test" component={ Test } />

                    </ Route>

                </ Router>
            </ Provider>
        );
    }

}

export default RootContainer;