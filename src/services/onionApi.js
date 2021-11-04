//http client - promise-based
const axios = require('axios').default

//gets the list of IPs from the onion Api
const getOnionApi = async () => {
    try {

        const { data } = await axios('https://onionoo.torproject.org/summary?limit=5000')
        const dataList = data.relays.map(item => item.a[0])

        return dataList

    } catch (error) {
        throw error
    }
}

module.exports = { getOnionApi }