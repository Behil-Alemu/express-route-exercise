const express = require('express');
const ExpressError = require("./expressError")
const app = express();
const operations = require("./operations");

app.use(express.json());



app.get('/mean', function(req, res, next) {
    return res.json({
        response: {
        operation: "mean",
        value: operations.mean((req.query.nums)),
        input: Number(req.query.nums)
    }});
  });

app.get('/median', function(req, res, next) {
    return res.json({
        response: {
        operation: "median",
        value: operations.median((req.query.nums)),
        input: parseInt(req.query.nums)
    }});
  });

app.get('/mode', function(req, res, next) {
    return res.json({
        response: {
        operation: "mode",
        value: operations.findMode((req.query.nums)),
        input: parseInt(req.query.nums)
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