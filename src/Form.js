import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form className="content">
      	<input type="text" placeholder="City, State"/>
      	<input type="submit" value="Search"/>
      </form>
    )
  }
}