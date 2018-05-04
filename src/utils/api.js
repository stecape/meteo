var axios = require('axios')

var sec = "7cb902f2e13d31fbca92132c227948cd"
var params = "?&APPID=" + sec

function getWeather (location) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + params)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  })
}

module.exports = {
  getWeather: getWeather
}