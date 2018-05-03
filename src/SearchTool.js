import React, { Component } from 'react'

export default class SearchTool extends Component {
	constructor(props) {
		super(props)
	}
  render() {
    return (
      <form className="search-tool-container">
      	<label htmlFor="location"><h1 className="form-label">{this.props.label}</h1></label>
      	<input className="form-input" id="location" type="text" placeholder="City, State"/>
      	<input className="form-button" type="submit" value="Get Weather"/>
      </form>
    )
  }
}