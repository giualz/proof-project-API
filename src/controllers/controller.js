const onionApi = require('../services/onionApi');
const torNodeApi = require('../services/torNodeListApi');
const IpBan = require('../database/models/IpBan')

module.exports = {

    //get to provide a list with all the IPs from the two sources
    async fullIpList(req, res, next) {
        try {

            const onionApiList = await onionApi.getOnionApi()

            const torNodeApiList = await torNodeApi.getTorNodeList()

            const fullList = {
                onionApiList,
                torNodeApiList
            }

            return res
                .status(200)
                .json(fullList)

        } catch (error) {
            return res
                .status(400)
                .json('Request failed')
        }
    },

    //post to include a new IP on the db where all the banned IPs are sent
    async addBan(req, res) {
        const data = req.body;
        console.log(req.body)
        try {

            await IpBan.create(data)

            return res
                .status(201)
                .json('IP included in Ban List')

        } catch (error) {

            return res
                .status(400)
                .json('IP could not be included in Ban List')
        }
    },

    //get to provide full list of valid IPs
    async bansOutIpList(req, res) {

        const ipList = []
        const onionApiList = await onionApi.getOnionApi();
        const torNodeApiList = await torNodeApi.getTorNodeList();
        const fullIpList = onionApiList.concat(torNodeApiList);

        const bannedIps = await IpBan.findAll();
        const bannedIpsOnly = bannedIps.map(item => item.dataValues.ipNumber)

        fullIpList.map((item1) => {
            bannedIpsOnly.map((item2) => {
                if(item1 !== item2){
                    ipList.push(item1)
                }
            })
        })
        const finalIpListSet = [...new Set(ipList)]

        console.log(finalIpListSet)

    }
}