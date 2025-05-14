require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./config/connectDB')

const PORT = process.env.PORT || 3000;
const app = express();

connectDB(process.env.MONGOURL || "mongodb://127.0.0.1:27017/gallary")


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.send("This is home page"));
app.use("/user", require('./routes/user'));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
