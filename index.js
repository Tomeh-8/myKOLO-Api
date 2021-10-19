const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const recordRoute = require('./routes/recordRoute');

dotenv.config();
const app = express();

//mongo connection
mongoose.connect("mongodb://localhost/kolo", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
       if (err) throw err;
       console.log("connected to dB!");
    });

app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: true}));
app.use(cors());

app.use('/record', recordRoute);


//listen
const PORT = process.env.PORT;
app.listen(PORT || 5000, () => console.log(`connected on port: ${PORT}`));