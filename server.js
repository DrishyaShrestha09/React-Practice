const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send('server is started');
});

app.get("/register", (req, res) =>{
    res.status(200).send('welcome to registeration page');
});

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`srever is running at port: ${PORT}`);
});