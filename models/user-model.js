const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


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
    isAdmin: {
        type: 'boolean',
        default: false, //defalut false because we donot create everyone admin 
    }
});

//? secure password with the bcrypt
userSchema.pre('save', async function(next){//data save hunu vanda aagadi ya store vako data haru suru ma execute hunxa
    console.log("pre method",this);
    const user = this;

    if(!user.isModified("password")){ 
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_passsword = await bcrypt.hash(user.password, saltRound); 
        user.password = hash_passsword;
    } catch (error) {
      next(error);  
    }
})


//defineing model/collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;