import React, { Component } from 'react';
import './InternalBlogApp.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class InternalBlogApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
