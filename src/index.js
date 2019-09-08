import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Main from './components/Main';
import './style/stylesheet.css';


ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));

