const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controller')


//routes definitions
module.exports = (routes) => {

    //GET - full IPs list
    routes.get(
        '/torlist/full',
        controller.fullIpList
    )

    //POST - add IP to ban DB
    routes.post(
        '/torlist/addban',
        // [Schema],
        // TorListController.addBan
    )

    //GET - IPs list without banned ones
    routes.get(
        '/torlist/bansout',
        // TorListController.bansOutIpList
    )

}