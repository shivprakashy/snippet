var app = require('express')();
var i=0;
app.get('/', function(req,res){
res.send('its working');
console.log('served req '+ ++i);
});
app.listen(3000);