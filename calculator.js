const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

// handle user inputs 
app.post("/", function(req, res){
    console.log(req.body.num1);
    // convert string to int
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result of calculation is = " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / Math.pow(height,2);
    res.send("Your BMI Is: " + bmi);
});


app.listen(port, function(){
    console.log("Server is running on port " + port);
});