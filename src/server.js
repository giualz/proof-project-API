require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.DB_PORT || 3333;

app.use(cors())

//devolve a lista completa - onionApi
app.get('/torlist/full', async (req, res) => {
    try {
        //data from response of axios
        const { data } = await axios('https://onionoo.torproject.org/summary?limit=5000')
        const dataList = data.relays
        const dataListFull = dataList.map(item => item.a[0])

        return res.json(dataListFull)

    } catch (error) {
        throw error
    }
})

app.get('/danlist/full', async (req, res) => {

    const { data } = await axios('https://www.dan.me.uk/torlist/?exit')

    const dataList = data.split('<br />')

    const dataListStrings = dataList.split('\n')

    return res.json(dataListStrings)

})

app.use(express.json())

app.listen(port, () => console.log(`Server working on port ${port}`))