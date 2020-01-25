import React, { Component } from 'react'
import axios from 'axios'

class Saat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            citys: [],
            searchTerm: ''
        }
}
componentDidMount() {
    axios
        .get('https://api.weatherstack.com/0bc72171eccbd4e4ea355e07d77f6456.json')
        .then(response => {
            this.setState({citys: response.data})
        });
}
handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
}

//löytää hakemat myös pienillä kirjaimilla
handleResultClick = ( countryName ) => {
    this.setState({ searchTerm: countryName.toLowerCase() });
}

render() {
//Etsii osuvat kaupungit
const showCity = this.state.citys.filter(country => country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

return(
    <div>
        <input onChange={this.handleChange} type='text' name="searchTerm" value={this.state.searchTerm} />
        <div>
        {
            showCity.length > 10 
            ? 'Liian monta tulosta löydetty, tarkenna hakua' 
            : showCity > 1
            ? showCity.map(country => (
                <button
                value={country.name}
                name="filter"
                onClick={this.handleChange}
                style={{margin: '10px', padding: '10px', fontSize: '1rem', borderRadius: '10px', border: 'solid, 1px', display: 'block'}}
                >
                    {country.name}
                </button>
            ))
            : showCity === 1
            ? showCity.map(country => (
                <div key={country.name}>
                    <h1>{country.name}</h1>
                </div>
            ))
            : 'No matches were found.'  

        }
        </div>
    </div>

);

}}

export default Saat;