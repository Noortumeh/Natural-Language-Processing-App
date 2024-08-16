var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//import the analyze url function
const {analyze} = require('./analyze.js');
//create dotnev
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

app.use(express.static('dist'));
app.use(express.json());

// Variables for url and api key
const key = process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// POST Route
app.post('/',  async (req, res) => {
    const url = req.body.url;
    const Analyze = await analyze(url, key);
    const {code, msg, sample} = Analyze;
    if(code == 100 || code == 212){
        return res.send({msg: msg, code: code});
    }else{
        return res.send({sample: sample, code: code});
    }

});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


