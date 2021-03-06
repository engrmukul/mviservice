const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const fs = require('fs')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./app/routes/index')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})