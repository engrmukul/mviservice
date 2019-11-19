'use strict';
const Login = require("../models/loginModel");

exports.login = (req, res) => {
    return (new Login()).login(req)
    .then((login) => {
        res.status(200).send({
            success: true,
            message: "login succeeded.",
            data: login
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "login failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};