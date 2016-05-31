var scraper = require('hko-scraper');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');

var channels = {
	
};

client.on('connect', function () {
  scraper.getWeather().then(function(weather) {
    client.publish('andyshome/weather/humidity', weather.humidity_pct.toString());
    client.publish('andyshome/weather/temperature', weather.degrees_c.toString());
    console.log(weather);
    client.end();
  });
});
