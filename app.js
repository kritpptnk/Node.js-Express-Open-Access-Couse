const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public")));

app.set("views","./src/views");
app.set("view engine", "ejs")

app.set("/products")

app.get("/", (req,res) =>{

res.render('index',{username: 'krit',customers: ["Sirawit" ,"Krit", "Siemon"]});

})

app.listen(PORT, () =>{

    debug("Listening on port" + chalk.red(" : "+ PORT));
})