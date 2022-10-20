const express = require('express');
const ExpressError = require("./expressError")
const app = express();
const operations = require("./operations");

app.use(express.json());



app.get('/mean', function(req, res, next) {
  let input = operations.changeToNum(req.query.nums.split(','))
    return res.json({
        response: {
        operation: "mean",
        input:input,
        value: operations.mean((input))
    }});
  });

app.get('/median', function(req, res, next) {
  let input = operations.changeToNum(req.query.nums.split(','))
    return res.json({
        response: {
        operation: "median",
        input:input,
        value: operations.median(input)
    }});
  });

app.get('/mode', function(req, res, next) {
  let input = operations.changeToNum(req.query.nums.split(','))
    return res.json({
        response: {
        operation: "mode",
        input:input,
        value: operations.findMode(input)
      }});
  });


// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });


app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
  });