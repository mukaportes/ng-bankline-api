var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest_test');
mongoose.Promise = global.Promise;

var app = express();
app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var Users = require('./models/users')
var Logs = require('./models/logs')

Logs.remove({}, function(err){
	console.log("Logs removidos")
})
 Users.remove({}, function(err) { 
   console.log('Usuários removidos') 
});

Users.find({}, function (err, docs) {
       var fs = require('./seed.json');
         for(let user of fs){
			 	console.log(user.account)
             var instancia = new Users(user)
             instancia.save(function (err) {
              if (err) throw err;
             });}
   })



console.log('Banco de dados resetado, rode o app.js');   
