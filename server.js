var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('userlist', ['userlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/userlist', function(req, res){
	console.log("Successful GET request");
	db.userlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    }); 
});

app.post('/userlist', function(req, res){
    console.log(req.body);
    db.userlist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete('/userlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.userlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log("server running on port 3000");