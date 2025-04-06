const express = require('express');
const app = express();
const connectDB = require('./db');
const productroute = require('./Routes/proroutes'); 
app.use(express.json());
const pull= 3004;
// const dotenv = require('dotenv');

const PORT = 
// process.env.PORT || 
3004;

connectDB();
// dotenv.config();

app.use('/api',productroute);

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
