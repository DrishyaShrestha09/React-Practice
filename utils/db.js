const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/mern_admin"
// mongoose.connect()


const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Successfully connected with the database");
        
    } catch (error) {
        console.error("Failed to connect with the database ");
        process.exit(0);
    }
};

module.exports = connectDb;