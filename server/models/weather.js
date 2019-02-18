var request = require('request-promise');

const API_KEY = '54fe3d33c758e3abbb561e169e306e90';

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({err: 'Could not reach OpenWeather API'});

    });
  }
}

module.exports = Weather;
