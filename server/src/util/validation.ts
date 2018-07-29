//import * as bcrypt from 'bcrypt'
import { check } from 'express-validator/check'

export const Validation = {
  forRegister: [
    check('email','Email is not valid.')
      .isEmail(),
      //.custom(email => User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
    check('password', 'Password must be at least 6 characters')
      .isLength({ min: 6 }),
    check('confirmPassword', 'Passwords do not match')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword)
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
  ],

  forReset: [
    check('password', 'Password must be at least 6 characters')
      .isLength({ min: 6 }),
    check('confirmPassword', 'Passwords do not match')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword)
    ]
}