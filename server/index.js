const express = require('express')
const app = express()
const cors = require('cors');
const cars = require('./api/cars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
   return res.send("welcome")
})

app.get('/cars', (req, res) => {
   return res.send(cars)
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Server started on ' + port));