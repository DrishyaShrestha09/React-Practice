const express = require('express');
const app = express();
const router = require("./router/auth-router");


// middleware
app.use(express.json()); // this means that in this app now we can use json. This middleware is responsible for parsing JSON data from the requests and it should be applied at the beginning of the middleware


app.use("/api/auth", router);


const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`server is running at port: ${PORT}`);
});