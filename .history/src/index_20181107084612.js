const express = require("express");
const mongoose = require("mongoose");

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost/goweek', {
    useNewUrlParser: true
});

app.user((req, res) => {

});


app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log("Serve started on port 3000");
});