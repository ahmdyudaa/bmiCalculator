const express = require('express');
const app = new express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var bb = req.body.bb;
    var tb = req.body.tb;
    var bmi = bb/Math.pow(tb/100,2);
    res.send("BMI is " + bmi);
});

app.listen('8080',() => {
    console.log("Server berjalan di port 8080");   
});