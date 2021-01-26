const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
//const server = http.createServer(app);
//const port = 3000;
//server.listen(port);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

//console.debug('Server listening on port ' + port);
