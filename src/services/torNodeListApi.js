//http client - promise-based
const axios = require('axios').default

const getTorNodeList = async () => {
    try {
        //data from response of axios
        // const { data } = await axios('https://www.dan.me.uk/torlist/?exit')
        // const dataList = data.split('\n')

        // return dataList
        const text = "101.100.146.147\n102.130.113.37\n102.130.113.9\n103.155.92.164\n103.228.53.155\n103.234.220.195\n103.236.201.88\n103.253.41.98\n103.26.142.68\n103.28.52.93\n104.131.206.23\n104.200.20.46\n104.244.72.115\n104.244.72.120\n104.244.72.123\n104.244.72.132\n104.244.72.152\n";

        const dataListStrings = text.split('\n')
    
        return dataListStrings

    } catch (error) {
        throw error
    }
}

module.exports = { getTorNodeList }