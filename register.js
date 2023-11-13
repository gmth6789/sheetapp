const axios = require('axios')

const Register = (req,res) => {
    let obj = {
        username : req.body.username,
        password : req.body.password
    }
    let url = ''
    let header = {
        'Api-Key': ''
    }
    try {
        const result = axios.post(url,obj,header)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = Register;