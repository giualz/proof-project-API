//server config

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3333;
const routes = require('./routers/routes');
require('./database/index');

//allows "safe" tranSference of info
app.use(cors())

app.use(express.json());

routes(app);

app.listen(port, () => console.log(`Server working on port ${port}`))