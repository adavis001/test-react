import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Button } from './Button';
import Random from './Random';

ReactDOM.render(< App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Button />, document.getElementById('one'));
ReactDOM.render(<Random />, document.getElementById('one'));