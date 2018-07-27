//import * as bcrypt from 'bcrypt'
import { check } from 'express-validator/check'

export const Validation = {
  forRegister: [
    check('email')
      .isEmail().withMessage('Email is not valid'),
      //.custom(email => User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
    check('password')
      .isEmpty().withMessage('Password cannot be blank'),
    check('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 6 characters'),
    check('confirmPassword')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Passwords do not match')
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
}