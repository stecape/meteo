import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SearchTool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    var value = event.target.value

    this.setState(function () {
      return {
        location: value
      }
    });
  }

  render() {
    return (
      <div className={this.props.header ? 'header-content' : 'page-content'}>
        <label><h1 className="form-label">{this.props.label}</h1></label>
        <input 
          className="form-input"
          type="text"
          placeholder="City, State"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <Link className="form-button" style={{ textDecoration: 'none' }} to={"/forecasts?location=" + this.state.location}>Get Weather</Link>
      </div>
    )
  }
}