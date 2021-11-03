const onionApi = require('../services/onionApi');
const torNodeApi = require('../services/torNodeListApi');



const fullIpList = async (req, res, next) => {
    try {

        const onionApiList = await onionApi.getOnionApi()

        const torNodeApiList = await torNodeApi.getTorNodeList()

        const fullList = {
            onionApiList,
            torNodeApiList
        }

        return res.status(200).json(fullList)

    } catch (error) {
        throw error
    }
}

// const addBan = async (req, res, next) => {

// }

// const bansOutIpList = async (req, res, next) => {

// }


module.exports = {
    fullIpList,
    // addBan,
    // bansOutIpList
}