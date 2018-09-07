"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = __importStar(require("nodemailer"));
var Emailer = /** @class */ (function () {
    function Emailer() {
    }
    Emailer.welcomeEmail = function (email, username, emailVerifyToken) {
        console.log('Sending welcome email to ' + email);
        var mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Welcome to TS-Node-Starter',
            html: "<p>Welcome to TS-Node-Starter.  To finish registration please click or paste this link into your browser to complete the process. </p>" +
                "<p><a href='http://localhost:8080/verify/" + emailVerifyToken + "'>http://localhost:8080/verify/" + emailVerifyToken + "</a> </p>"
        };
        Emailer.send(mailData);
    };
    Emailer.forgotPasswordRequestEmail = function (email, passwordResetToken) {
        console.log('Sending reset password email to ' + email);
        var mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Reset your TS-Node-Starter password',
            html: "<p>We have received your request to reset your password. Please click the link below to complete the reset:</p>" +
                "<p><a href='http://localhost:8080/reset/" + passwordResetToken + "'>http://localhost:8080/reset/" + passwordResetToken + "</a> </p>"
        };
        Emailer.send(mailData);
    };
    Emailer.passwordResetSuccessEmail = function (email) {
        console.log('Sending reset password email to ' + email);
        var mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: 'Your TS-Node-Starter password has been reset.',
            html: "<p>The password for your account has been successfully reset.  If you didn’t make this change or if you believe an unauthorized person has accessed your account, go to TS-Node-Starter to reset your password immediately.</p>" +
                "<br><p>If you need additional help, contact TS-Node-Starter support.</p>" +
                "<br><br><p>TS-Node-Starter Support</p>"
        };
        Emailer.send(mailData);
    };
    Emailer.inviteEmail = function (email, username, fromUsername, emailVerifyToken, password) {
        console.log('Sending invite email to ' + email);
        var mailData = {
            to: email,
            from: Emailer.fromEmail,
            subject: fromUsername + ' invited you to TS-Node-Starter',
            html: "<p>Welcome to TS-Node-Starter.  To finish registration please click or paste this link into your browser to complete the process. </p>" +
                "<p><a href='http://localhost:8080/verify/" + emailVerifyToken + "'>http://localhost:8080/verify/" + emailVerifyToken + "</a> </p>" +
                "<p>This is your temporary password: " + password + "</p>"
        };
        Emailer.send(mailData);
    };
    Emailer.send = function (mailData) {
        var smtpConfig = {
            service: 'gmail',
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        };
        var transporter = nodemailer.createTransport(smtpConfig);
        transporter.sendMail(mailData);
    };
    Emailer.fromEmail = 'XXXXXX@XXXXX.XXX';
    Emailer.fromName = 'XXXXX';
    return Emailer;
}());
exports.Emailer = Emailer;
