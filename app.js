const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey ="4375f0e0cc03d72fdd349333653b15cc"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey+ "&units=" + unit;

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData =JASON.parse(data);
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      const imageURL = "https://api.openweathermap.org/img/wn/" + icon + "@2x.png";
      re.write("<p>The weather is currently" + weatherDescription + "</p>");
      re.write("<h1>The weather in " + query + " is" + temp + "degrees Celcius.</h1>");
      re.write("<img src=" + imageURL +"");
      re.send();

    });
  });
})


app.listen(3000, function() {
  console.log("server is running");
})
