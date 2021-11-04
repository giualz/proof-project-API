const express = require('express')
const controller = require('../controllers/controller')
const {ipBanSchema} = require('../schemas/ipBanSchema')
const routes = express.Router()

//routes definitions
module.exports = (app) => {

    //GET - full IPs' list
    app.get(
        '/torlist/full',
        controller.fullIpList
    );

    //POST - add IP to banned IPs' DB
    app.post(
        '/torlist/addban',
        [ipBanSchema],
        controller.addBan
    );

    //GET - full valid IPs' list - excludes banned IPs
    app.get(
        '/torlist/bansout',
        controller.bansOutIpList
    )

}