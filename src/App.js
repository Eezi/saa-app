import React, { Component } from 'react';
import axios from 'axios'
import Saat from './Saat/Saat'
import Maat from './Maat/Maat'


class App extends Component {
  render() {
  return (
    <div>
        <Maat />
        <Saat />
    </div>
  );
  }
}

export default App;
