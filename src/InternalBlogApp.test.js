import React from 'react';
import ReactDOM from 'react-dom';
import InternalBlogApp from './InternalBlogApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InternalBlogApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
