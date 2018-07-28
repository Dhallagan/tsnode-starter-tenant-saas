"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emailer = /** @class */ (function () {
    function Emailer() {
    }
    Emailer.welcomeEmail = function (email, username, emailVerifyCode) {
        console.log('Sending email to ' + email);
    };
    Emailer.fromEmail = 'admin@starter.io';
    Emailer.fromName = 'ADMIN';
    return Emailer;
}());
exports.Emailer = Emailer;
