const home = async (req, res) =>{
    try {
        res
        .status(200)
        .send('server is started using router');
    } catch (error) {
        console.log(error);
    }
};

const register = (req, res) =>{
    try {
        res.status(200).send('welcome to registeration page using controllers again by adding reference variables')
    } catch (error) {
        res.status(400).send({msg: "page not found"})
    }
    
}

module.exports = { home, register };