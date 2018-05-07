import React, { Component } from 'react'

export default class DailyForecast extends Component {
	render(){
		var data = this.props.data
		return(
      <ul>
        {data.map( day => {
          var image = window.location.origin + "/images/weather-icons/" + day.weather[0].icon + '.svg'
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          var days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"]
          var date = new Date(day.dt*1000)
          var _day = days[date.getDay()]
          var _month = months[date.getMonth()]
          var _date = _day + ', ' + _month + ' ' + date.getDate()
        	return (
        		<li key={day.dt}>
              <img src={image} alt="Weather"/>
              <h2>{_date}</h2>
        		</li>
        	)
        })}
      </ul>
    )
  }
}