import React, { Component } from 'react'
import api from '../utils/api'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import Loading from './Loading'
import DailyForecast from './DailyForecast'

class Forecasts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			weather: [],
      city:''
		}
	}

	componentDidMount() {
    var location = queryString.parse(this.props.location.search).location
    api.getWeather(location)
      .then( (response) => {
      	this.setState({
          loading: false,
          weather: response.data.list,
          city:    response.data.city.name + ', ' + response.data.city.country
        })
      })
      .catch( (error) => {
        this.setState({loading: false})
        console.log(error)
      })
	}

  render() {
    
    return (
    	this.state.loading ?
    	(<Loading />) :
    	(<div className="result-content">
        <h1 className="result-title">{this.state.city}</h1>
        <DailyForecast data= {this.state.weather} />
      </div>)
    )
  }
}
export default withRouter(Forecasts)