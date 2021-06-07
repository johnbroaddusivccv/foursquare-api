import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchInput:""
    }
  }
  
  changeHandler = (event) => {
    this.setState({searchInput:event.target.value});
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.getVenues.bind(null,this.state.searchInput)}>
        <input onChange={this.changeHandler} type="text" placeholder="search venue" name="searchInput" id="searchInput"></input>
        <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
