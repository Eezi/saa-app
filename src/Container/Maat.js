import React, { Component } from 'react'
import classes from './Maat.module.css'
import axios from 'axios'
import {Route, Link} from 'react-router-dom';
import Saat from './Saat/Saat'


class Maat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          countries: [],
          searchTerm: '',
          
        }
      }
  //Tämän lifecycle hookin avulla haetaan data tietokannasta
  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({countries: response.data})
      });
  }
  //Tämän metodin avulla osataan yhdistää maan nimi ja input arvoon.
  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }
  //löytää hakemat myös pienillä kirjaimilla
	handleResultClick = ( countryName ) => {
		this.setState({ searchTerm: countryName.toLowerCase() });
	}

  render() {
    //Tässä ensiksi haetaan maiden data ja tehdään lista vain maiden nimistä ja muutetaan niiden kirjaimet pieniksi, samoin hakusanat pieniksi
    const countriesToShow = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    const text = 'Too many matches, specify another filter.';
  return (
    <div className={classes.Container}>
            
            <input placeholder="Find a country..." className={classes.Inputti} name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />  
        <div>
            { //Jos maita löytyy enemmän kuin 10 niin tulostaa tarkenna tietoa
               countriesToShow.length > 10 
              ? text
              //Jos löydettujen maiden määrä on suurempi kuin 1 niin se ehdottaa vaihtoehtoina löydetyt
              : countriesToShow.length > 1
              //Ja muutetaan vaihtoehdot napeiksi, joita voi valita
              ? countriesToShow.map(country => (
                  <button
                    key={country.name}
                    name="searchTerm"
                    value={country.name}
                    onClick={this.handleChange}
                    style={{margin: '10px', padding: '10px', fontSize: '1rem', borderRadius: '10px', border: 'solid, 1px', display: 'block'}}
                    >
                      {country.name}
                    
                  </button>
              ))
              //Jos haku löytää tasan yhden oikean vaihtoehdon niin tulostetaan tiedot
              : countriesToShow.length === 1
              ? countriesToShow.map(country => (
                <div key={country.name}>
                  <h2>{country.name}</h2>
                  <p style={{margin: '10px'}}>Capital: {country.capital}</p>
                  <p>Population: {country.population}</p>
                  <img style={{margin: '10px'}} alt={`${country.name} flag`} src={country.flag} width="200" />
                </div>
              ))
              : 'No matches were found.'  
          }   
           
        </div>    
    </div>
  );
  }
}


export default Maat;