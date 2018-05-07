var axios = require('axios')

var sec = "b714ec74bbab5650795063cb0fdf5fbe"
var params = "APPID=" + sec

function getWeather (location) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&' + params + '&cnt=5')
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