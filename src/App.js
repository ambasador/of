import React, { Component } from 'react';


import './css/boostrap-grid.css';
import './css/fonts.css';
import './App.css';
import './css/main.css';

import Header from './components/header';
import Toptext from './components/topText';
import Line from './components/line';
import FourColumns from './components/forColumns';
import Violet from './components/violet';
import Four from './components/four';
import Orange from './components/orange';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
            <Toptext/>
            <Line/>
            <FourColumns/>
            <Violet/>
            <Four/>
            <Line/>
            <Orange/>
            <Line/>
            <Contact/>
            <Line/>
            <Footer/>
      </div>
    );
  }
}

export default App;
