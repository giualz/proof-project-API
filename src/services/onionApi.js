//http client - promise-based
const axios = require('axios').default

const getOnionApi = async () => {
    try {
        //data from response of axios
        const { data } = await axios('https://onionoo.torproject.org/summary?limit=5000')
        const dataList = data.relays.map(item => item.a[0])

        return dataList

    } catch (error) {
        throw error
    }
}

module.exports = { getOnionApi }