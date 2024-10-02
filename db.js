const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL=process.env.Db_url;


mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected successfully');
});

db.on('error', () => {
    console.log('error');
});

db.on('disconnected', () => {
    console.log('disconnected');
});

module.exports = db;
