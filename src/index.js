import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InternalBlogApp from './InternalBlogApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InternalBlogApp />, document.getElementById('root'));
registerServiceWorker();
