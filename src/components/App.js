import React, { Component } from 'react'
import SearchTool from './SearchTool'
import Forecasts from './Forecasts'
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="super-container">
    			<Header/>
					<Switch>
    				<Route exact path="/" render={() => {return <SearchTool label='Enter a City and State' />}} />
    				<Route path="/forecasts" render={() => {return <Forecasts />}} />
    				<Route render={() => {return <div className='page-content'>404 - Page not found</div>}} />
					</Switch>
				</div>
			</BrowserRouter>
    )
  }
}

export default App;
