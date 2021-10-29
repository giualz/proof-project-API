require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.DB_PORT || 3333;

app.use(express.json());

app.listen(port, () => console.log(`Server working on port ${port}`))