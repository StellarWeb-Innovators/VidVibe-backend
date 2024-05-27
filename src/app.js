const express = require("express");
const cors = require("cors");
// const { createServer } = require("http");
const cookieParser = require('cookie-parser');


// 
const app = express();
// const server = createServer(app);


// middlewares

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PATCH", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 204,
}))

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Route is working",
    });
});

// ALL APIS Here






module.exports = app;