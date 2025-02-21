const express = require('express'); 
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes/routes');

const app = express();
dotenv.config();
connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST","GET","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Worker Finder API');
});

app.use('/api', routes);

module.exports = app;