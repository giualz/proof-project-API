const { Model, DataTypes} = require('sequelize')

class ipBan extends Model {
    static init(sequelize) {
        super.init({
            ipNumber: DataTypes.STRING,
            status: DataTypes.BOOLEAN
        },{
            sequelize,
            tableName:'ip_numbers'
        })
    }
}

module.exports = ipBan