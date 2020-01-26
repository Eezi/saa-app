import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter} from 'react-router-dom';
import Etusivu from './Container/Etusivu';


class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
        <Etusivu />
        
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
