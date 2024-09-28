require("dotenv").config();
const express = require('express');
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// middleware
app.use(express.json()); // this means that in this app now we can use json. This middleware is responsible for parsing JSON data from the requests and it should be applied at the beginning of the middleware

//connecting to the databse 
app.use("/api/auth", router);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});