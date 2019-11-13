const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

// app.get('/api', (req, res) => {
//     res.status(200).send({
//         data: "Welcome Node Sequlize API v1"
//     })
// })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})