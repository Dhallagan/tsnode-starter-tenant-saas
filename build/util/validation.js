"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as bcrypt from 'bcrypt'
var check_1 = require("express-validator/check");
exports.Validation = {
    forRegister: [
        check_1.check('email')
            .isEmail().withMessage('Email is not valid'),
        //.custom(email => User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
        check_1.check('password')
            .isEmpty().withMessage('Password cannot be blank'),
        check_1.check('password')
            .isLength({ min: 8 }).withMessage('Password must be at least 6 characters'),
        check_1.check('confirmPassword')
            .custom(function (confirmPassword, _a) {
            var req = _a.req;
            return req.body.password === confirmPassword;
        }).withMessage('Passwords do not match')
    ],
    forLogin: [
    //  check('email')
    //    .isEmail().withMessage('Invalid email format')
    //    .custom(email => User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
    //  check('password')
    //    .custom((password, { req }) => {
    //      return User.findOne({ where: { email: req.body.email } })
    //        .then(u => bcrypt.compare(password, u!.password))
    //    }).withMessage('Invalid email or password')
    ]
};
