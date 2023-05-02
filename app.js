require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const router = require('./routers/index');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log("DB Connected"); })
    .catch(err => console.error(err.message));

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(8000, () => {
    console.log("http://localhost:8000/")
});