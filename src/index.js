import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Button } from './Button';
import Random from './Random';
import Picture from './Picture';

ReactDOM.render(< App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Random />, document.getElementById('one'));
// ReactDOM.render(<Picture />, document.getElementById('two'));