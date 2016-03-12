var express = require("express");
var app = express();
/*app.get('/', function(req, res) {
  res.send("Hello you are here in node.js server");
});*/

// creating middleware

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log("private route hit !");
    next();
  },
  logger: function(req,res,next){
    console.log("Request " +req.method + "  " + new Date().toString()+ req.originalUrl);
    next();
  }
}
// application level middleware
app.use(middleware.logger);
//rouute level middleware
app.get('/about',middleware.requireAuthentication, function(req, res) {
  res.send("all known about us");
});
app.use(express.static('public')); // exposes public folders
//app.use(express.static(__dirname+'/public'));
app.listen(3000);
