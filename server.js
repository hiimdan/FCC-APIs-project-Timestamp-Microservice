// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/timestamp/:date_string?", function(req, res) {
  let date;
  if (req.params.date_string) {
    let ms = Date.parse(req.params.date_string);
    if (ms) {
      date = new Date(ms);
      res.json({"unix": date.getTime(), "utc": date.toUTCString()});
    } else {
      res.json({"error": "Invalid Date"});
    }
  } else {
    date = new Date();
    res.json({"unix": date.getTime(), "utc": date.toUTCString()});
  }
})

// Error page for unrecognized path request
app.use(function(req, res) {
  res.status(404);
  res.sendFile(__dirname + '/views/error.html');
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

