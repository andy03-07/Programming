const express = require('express');
const app = express();
const connectDB = require('./DB');
const users = require('./Routes/users');
// const dotenv= require('dotenv');
// dotenv.config();
const port = 
// process.env.PORT || 
3003;

app.use(express.json());

connectDB();

app.use('/api',users);


app.get('/', (req, res) => {
  res.send('Hello World! from server 3');
  console.log("i'm inside home directory");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});