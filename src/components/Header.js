import React, { Component } from 'react'
import SearchTool from './SearchTool'

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <h1 className="content">Clever Title</h1>
        <SearchTool header />
      </header>
	  )
	}
}