import React, { Component } from 'react'
import './SearchTool.css'

export default class SearchTool extends Component {
  render() {
    return (
      <form className="search-tool-container">
      	<label className="search-tool-label" for="location"><h1 className="header">Enter a City and State</h1></label>
      	<input className="search-tool-input" id="location" type="text" placeholder="City, State"/>
      	<input className="search-tool-button" type="submit" value="Search"/>
      </form>
    )
  }
}