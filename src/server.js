require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.DB_PORT || 3333;
const routes = require('./routers/routes')

app.use(cors())

// devolve a lista completa - onionApi
// app.get('/torlist/full', async (req, res) => {
//     try {
//         //data from response of axios
//         const { data } = await axios('https://onionoo.torproject.org/summary?limit=5000')
//         const dataList = data.relays.map(item => item.a[0])

//         return res.json(dataList)

//     } catch (error) {
//         throw error
//     }
// })

app.get('/danlist/full/test', async (req, res) => {

    const text = "101.100.146.147\n102.130.113.37\n102.130.113.9\n103.155.92.164\n103.228.53.155\n103.234.220.195\n103.236.201.88\n103.253.41.98\n103.26.142.68\n103.28.52.93\n104.131.206.23\n104.200.20.46\n104.244.72.115\n104.244.72.120\n104.244.72.123\n104.244.72.132\n104.244.72.152\n";

    const dataListStrings = text.split('\n')

    return res.json(dataListStrings)

})

app.get('/danlist/full', async (req, res) => {

    const { data } = await axios('https://www.dan.me.uk/torlist/?exit')
    const dataListStrings = data.split('\n')

    return res.json(dataListStrings)

})

app.use(express.json());

routes(app);

app.listen(port, () => console.log(`Server working on port ${port}`))