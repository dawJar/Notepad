import React from 'react';
import { render } from 'react-dom';
import RootContainer from './js/containers/RootContainer.jsx';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/main.scss';


render(
    <RootContainer />,
    document.getElementById('app')
);
