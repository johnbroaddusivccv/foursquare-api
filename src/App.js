import React, { Component } from 'react';
import './App.css';
import Search from './Search.js'

require('dotenv').config();

const axios = require('axios');


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       latlong: "",
       venues: []
    }
  }
  

  
  componentDidMount() { this.getLocation();}
  getLocation = () => (navigator.geolocation.getCurrentPosition(response => this.setState({latlong: response.coords.latitude +","+response.coords.longitude},()=>{this.getVenues("Music")} )));

  getVenues = (query) => {  
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params =  {
      client_id: "",
      client_secret: "",
      ll: this.state.latlong,
      query: query,
      v: "20180323"
    };
    
    axios.get(endPoint + new URLSearchParams(params)).then(response=> console.log(response.data));
    axios.get(endPoint + new URLSearchParams(params)).then(response=> this.setState({ venues: response.data.response.groups[0].items}));
  }
  render() {
    return (
      <div>
        <Search getVenues={this.getVenues} />
        <ul>
        {this.state.venues.map(venue=>{return <li key={venue.venue.name} >{venue.venue.name} Location: {venue.venue.location.address}</li>})}
      </ul>
      </div>
        
      
    )
  }
}

export default App;
