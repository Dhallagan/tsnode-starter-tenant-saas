"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var moment_1 = __importDefault(require("moment"));
//import { environment } from '../../environments/environment';
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    Authentication.isAuthenticated = function (req, res, next) {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
        }
        var token = req.headers.authorization.split(' ')[1];
        // console.log(token)
        var payload;
        try {
            payload = jwt.verify(token, 'secretsecretsecret');
        }
        catch (err) {
            return res.status(401).send({ message: err.message });
        }
        if (payload.exp <= moment_1.default().unix()) {
            return res.status(401).send({ message: 'Token has expired' });
        }
        req['user'] = payload.sub;
        req['tenant'] = payload.tenant;
        next();
    };
    Authentication.issuerName = 'localhost';
    return Authentication;
}());
exports.Authentication = Authentication;
