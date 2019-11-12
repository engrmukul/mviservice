const userController = require('../controller/user');
module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })

    app.post('/api/user/create', userController.create);

    app.put('/api/user/:userId', userController.update);
}