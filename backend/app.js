require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./config/connectDB')
const multer = require('multer');
const upload = multer();
const {verifyToken} = require('./middlewares/auth')



const PORT = process.env.PORT || 3000;
const app = express();

connectDB(process.env.MONGOURL || "mongodb://127.0.0.1:27017/gallary")


// Middlewares
app.use(upload.none()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));


// Routes
app.get('/', (req, res) => res.send("This is home page"));
app.use("/auth", require('./routes/auth'));
app.use("/user", verifyToken, require('./routes/user'));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
