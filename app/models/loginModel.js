'use strict';
const db = require("../../db/models/index");

function Login() {
    this.login = async (req) => {
        const data = { ...req.body };
        return db.user.login(data);
    };
}

module.exports = Login;