//description of how the information should be structured to successfully reach the db

const { validateDto } = require("../utils/validateDto");
const { body } = require('express-validator');

exports.ipBanSchema = validateDto([
    body('ipNumber')
        .notEmpty()
        .withMessage('IP number cannot be empty')
        .isString()
        .withMessage('IP Number must be a string')
        .isLength({ min: 7 }, { max: 15 })
        .withMessage('Number of characters must be between 7 and 15'),
    body('status')
        .default(true)
        .isBoolean()
])