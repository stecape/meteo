import React, { Component } from 'react'
import SearchTool from './SearchTool'
import Header from './Header'

class App extends Component {
  render() {
    return (
    	<div className="app-container">
	      <Header />
	      <SearchTool />
      </div>
    )
  }
}

export default App;
