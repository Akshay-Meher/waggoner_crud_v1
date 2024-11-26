const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require('./src/routes');

app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});