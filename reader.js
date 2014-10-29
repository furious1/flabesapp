var feed = require("feed-read");
var http = require("http");
var mongoose = require("mongoose")

/*var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');*/



feed("http://feeds.feedburner.com/RockPaperShotgun?format=xml", function(err, articles){
    if (err) throw err;
//    console.log(articles);

    var feeds =[];
    for (var i=0; i<articles.length; i++){
      feeds[i] = articles[i];
    };
    console.log(feeds);
    var db = mongoose.connection;
    db.on("error",console.error);
    db.once("open",function(){

    });


});



// console.log(feeds)


/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Only Testing\n');
}).listen(3000, '0.0.0.0');
*/

