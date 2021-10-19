const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const recordRoute = require('./routes/recordRoute');

dotenv.config();
const app = express();

//mongo connection
const url = process.env.MONGO_URI
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
       if (err) throw err;
       console.log("connected to dB!");
    });

app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: true}));
app.use(cors());

app.use('/record', recordRoute);
app.get("/", (req, res) => {
   res.send("Welcome to myKOLO Api!")
});


//listen
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => console.log(`connected on port: ${PORT}`));