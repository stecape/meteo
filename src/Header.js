import React, { Component } from 'react'
import Form from './Form'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <h1 className="content">Clever Title</h1>
        <Form />
      </header>
	  )
	}
}