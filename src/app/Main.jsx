import React, { Component } from 'react';
import Header from './partials/Header.jsx';
import Footer from './partials/Footer.jsx';
import Builder from './builder/Builder.jsx';
import Content from './Main/Content.jsx';
import './css/main.css';
import './css/icon.css';
import './css/panel.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;
