import React, { Component } from 'react'
import SearchTool from './SearchTool'
import { withRouter, matchPath } from 'react-router-dom'


class Header extends Component {
  render() {

  	this.getStyle = () => {
			const match = matchPath(this.props.location.pathname, {
			  path: '/',
			  exact: true,
			  strict: false
			})
			var style = !match ?
			({backgroundColor: 'orange', color: 'white'}) :
			({backgroundColor: 'white', color: '#606060'})
			return style
  	}
    return (
      <header className="container" style={this.getStyle()}>
        <h1 className="header-content" >Clever Title</h1>
        <SearchTool header />
      </header>
	  )
	}
}

export default withRouter(Header)