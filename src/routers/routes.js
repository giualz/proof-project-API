const TorListController = require('../controllers/torListController')
const onionApi = require('../services/onionApi')

//routes definitions
module.exports = (routes) => {

    //GET - full IPs list
    routes.get(
        '/torlist/full',
        // onionApi
    )

    //POST - add IP to ban DB
    routes.post(
        '/torlist/addban',
        [Schema],
        // TorListController.addBan
    )

    //GET - IPs list without banned ones
    routes.get(
        '/torlist/bansout',
        // TorListController.bansOutIpList
    )

}