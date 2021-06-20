const express = require('express')
require('dotenv').config();

const app = express();
const port= process.env.PORT;

app.use(express.static('public'));
 

app.get('/hola', (req, res) => {
    res.send('Hello World es su ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});
 
app.listen(port, () => {
    console.log( `Corriendo en: ${port}` );
});