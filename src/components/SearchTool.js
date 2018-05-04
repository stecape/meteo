import React, { Component } from 'react'
import { Redirect } from 'react-router';
import api from '../utils/api'

export default class SearchTool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    var value = event.target.value

    this.setState(function () {
      return {
        location: value
      }
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState ({ redirect: true })
    // api.getWeather(this.state.location)
    //   .then(function (response) {
    //     console.log(response.data.weather)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }

  render() {
    return(
      {!!this.state.redirect} ? 
      {<Redirect push to={"/forecasts?location=" + this.state.location} />} :
      {<form className={this.props.header ? 'header-content' : 'page-content'} onSubmit={this.handleSubmit}>
        <label htmlFor="location"><h1 className="form-label">{this.props.label}</h1></label>
        <input 
          className="form-input"
          id="location"
          type="text"
          placeholder="City, State"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input className="form-button" type="submit" value="Get Weather"/>
      </form>}
    )
  }
}