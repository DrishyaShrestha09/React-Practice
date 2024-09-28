const User = require("../models/user-model");
const bcrypt = require("bcryptjs"); // bcrypt is used for hashing passwords




const home = async (req, res) => {
    try {
        res
            .status(200)
            .send('server is started using router');
    } catch (error) {
        console.log(error);
    }
};

//regesteration logic 

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email }); //checking the existence of the email

        if (userExist) {
            return res.status(400).json({ msg: 'User already exists. Try logging in insted' });
        }

        // hashing password
        // const saltRound = 10;
        // const hash_passsword = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username,
            email,
            phone,
            password,
            // password: hash_passsword,
         });


        res.status(201).json({ msg: userCreated });
    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }

};

module.exports = { home, register };