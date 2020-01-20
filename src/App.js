import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          countries: [],
          searchTerm: ''
        }
      }
  //Tämän lifecycle hookin avulla haetaan data 
  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({countries: response.data})
      });
  }
  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

	handleResultClick = ( countryName ) => {
		this.setState({ searchTerm: countryName.toLowerCase() });
	}

  render() {
    const countriesToShow = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  
  return (
    <div>
        <h1>Maat</h1>

        
            Etsi maita: <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />  
        <div>
            {
              countriesToShow.length > 10 
              ? 'Liian monta vaihtoehtoa, tarkenna tietoa.'
              : countriesToShow.length > 1
              ? countriesToShow.map(country => (
                  <button
                    key={country.name}
                    name="searchTerm"
                    value={country.name}
                    onClick={this.handleChange}
                    style={{border: '0', display: 'block'}}
                    >
                      {country.name}
                    
                  </button>
              ))
              : countriesToShow.length === 1
              ? countriesToShow.map(country => (
                <div>
                  <h2>{country.name}</h2>
                  <p>Maan pääkaupunki on: {country.capital}</p>
                  <p>Maan väkiluku on: {country.population}</p>
                  <img alt={`${country.name} flag`} src={country.flag} width="200" />
                </div>
              ))
              : 'Ei löytynyt vaihtoehtoja.'  
          }           
        </div>    
    </div>
  );
  }
}

export default App;
