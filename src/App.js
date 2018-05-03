import React, { Component } from 'react'
import SearchTool from './SearchTool'
import Header from './Header'

class App extends Component {
  render() {
    return (
    	<div className="app-container">
	      <Header />
	      <SearchTool label='Enter a City and State'/>
      </div>
    )
  }
}

export default App;
