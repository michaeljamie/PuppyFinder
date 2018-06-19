//Setup express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3005;
const mc = require('./controller/favManager');

app.use ( bodyParser.json() );
app.use ( express.static ( __dirname + '/../public/build') );

const faveURL = '/api/favorites'
app.post( faveURL, mc.create);
app.get( faveURL, mc.read);
app.put( `${faveURL}/:id`, mc.update);
app.delete( `${faveURL}/:id`, mc.delete);




app.listen(port, () => {
    console.log('Listening on port ' + port);
})