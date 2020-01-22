import React, { Component } from 'react'
import axios from 'axios'

class Saat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            citys: [],
            filter: ''
        }
}
componentDidMount() {
    axios
        .get('https://api.weatherstack.com/0bc72171eccbd4e4ea355e07d77f6456')
        .then(response => {
            this.setState({citys: response.name})
        })
}

render() {


return(
<div>

</div>



)




}
}

export default saat;