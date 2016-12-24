import React from 'react';
import {render} from 'react-dom';
import App from './App';


// stylings
import '../node_modules/normalize.css/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/styles.scss';

render(
    <App>
    </App>,
    document.getElementById('#app_container')
);