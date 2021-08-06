//1-require express validator
const {body, validationResult} = require('express-validator')

const registerValidators = () => [
    body('firstName', "The first name is required").notEmpty(),
    body('lastName', "The last name is required").notEmpty(),
    body('email', "Invalid email").isEmail(), 
    body('password', "The password must contain from 6 to 12 characters, at least one Upper case, at least one lower case.").isLength({
        min: 6,
        max: 12
    }).matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]/,
    ),
]

const loginValidators = () => [
    body('email', "Invalid email").isEmail(), 
    body('password', "The password must contain from 6 to 12 characters, at least one Upper case, at least one lower case.").isLength({
        min: 6,
        max: 12
    }).matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]/,
    ),
]

const commentValidators = () => [
    body('commenter', "Specify a user name").notEmpty(),
    body('commentBody', "The comment is required").notEmpty(),
]
const validator = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors: errors.array().map(el => ({msg: el.msg}))
        })
    }
    next()
}

module.exports = {registerValidators, loginValidators, commentValidators,validator}
