"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as bcrypt from 'bcrypt'
var check_1 = require("express-validator/check");
exports.Validation = {
    forRegister: [
        check_1.check('email', 'Email is not valid.')
            .isEmail(),
        //.custom(email => User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
        check_1.check('password', 'Password must be at least 6 characters')
            .isLength({ min: 6 }),
        check_1.check('confirmPassword')
            .custom(function (confirmPassword, _a) {
            var req = _a.req;
            return req.body.password === confirmPassword;
        }).withMessage('Passwords do not match')
    ],
    forLogin: [
    //  check('email', 'Email is not valid.')
    //    .isEmail()
    //    .custom(email => User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
    //  check('password')
    //    .custom((password, { req }) => {
    //      return User.findOne({ where: { email: req.body.email } })
    //        .then(u => bcrypt.compare(password, u!.password))
    //    }).withMessage('Invalid email or password')
    ]
};
