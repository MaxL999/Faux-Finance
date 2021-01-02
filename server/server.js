const expressSession = require("express-session");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const UserSchema = require("./config/mongoUser");
const bcrypt = require("bcryptjs");


var cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fauxfinance",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    // console.log(req.headers.origin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(cors({
    origin: "http://localhost:3000",
    credientials: "include",
}));

app.use(expressSession({
    secret: "cookieKey",
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: null,
    },
}))
app.use(cookieParser())

// passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

require("./routing/router")(app, passport);


// Start the API server
app.listen(PORT, () => {
    console.log(`Hosting on http://localhost:${PORT}/`);
});