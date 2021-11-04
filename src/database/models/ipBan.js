//model to represent the content and structure of banned IPs' db

const { Model, DataTypes} = require('sequelize')

class IpBan extends Model {
    static init(sequelize) {
        super.init({
            ipNumber: DataTypes.STRING,
            status: DataTypes.BOOLEAN
        },{
            sequelize,
            tableName:'ipBan'
        })
    }
}

module.exports = IpBan