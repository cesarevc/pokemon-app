const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const pokemonRoute = require("./routes/pokemon.route.js");
const Pokemon = require('./models/pokemon.model.js');


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/health", (req, res) => {
    res.send("Hello, the Server is Up!");
});

// routes
app.use("/api/v1/pokemon", pokemonRoute);

mongoose.connect("mongodb+srv://cesarevc:qPknQBKr07SGKbut@clusterdb.lzia1ht.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=ClusterDB")
.then(() => {
    console.log("Connected to Database! :)");
    // SERVER RUNS WHEN THE DATABASE CONNECTS
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed! :(");
});