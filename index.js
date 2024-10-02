const express = require('express');
const app=express()
const port =4005
const db = require('./db');  // Assuming you have a file to connect to your database
const Person = require('./models/person');  // Assuming person schema is being used elsewhere
const MenuItem = require('./models/MenuItem');

const bodyParser=require('body-parser');
app.use(bodyParser.json());


const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);

const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})