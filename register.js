const axios = require('axios')

const Register = (req,res) => {
    let obj = {
        username : req.body.username,
        password : req.body.password
    }
    let url = 'https://sheet.best/api/sheets/1eb91623-5f06-4dd7-b1f5-4c006dae0e15'
    let header = {
        'Api-Key': 'mopvpOmi4!IYreO@b61kkEieQX6Ru@0QL$avC7Nxb-#B8tBKmTbp848YQV9Qc%s4'
    }
    try {
        const result = axios.post(url,obj,header)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = Register;