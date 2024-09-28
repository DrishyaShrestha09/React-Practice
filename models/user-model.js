const mongoose = require('mongoose');

//adding userschema

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        require: true,
    },
    email: {
        type: 'string',
        require: true,
    },
    phone: {
        type: 'string',
        require: true,
    },
    password: {
        type: 'string',
        require: true,
    },
    isAdmin:{
        type: 'boolean',
        default: false, //defalut false because we donot create everyone admin 
    }
});

//defineing model/collection name

const User = new mongoose.model("User", userSchema);

module.exports = User;