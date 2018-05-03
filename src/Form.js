import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form className="content">
      	<input className="form-input" type="text" placeholder="City, State"/>
      	<input className="form-button" type="submit" value="Get Weather"/>
      </form>
    )
  }
}