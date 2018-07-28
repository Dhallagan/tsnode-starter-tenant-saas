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
    // static isAuthenticated(req: Request): string {
    //     let token = null;
    //     const authorization = req.headers.authorization as string;
    //     // Retrieve the token form the Authorization header
    //     if (authorization && authorization.length > 8 && authorization.split(' ')[0] === 'Bearer') {
    //         token = authorization.split(' ')[1];
    //     }
    //     return token;
    // }
    // static isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    //     var token = (req.headers.authorization as string).split(' ')[1]
    //     try {
    //         return jwt.verify(token, 'secretsecretsecret')
    //     } catch (error) {
    //         return false
    //     }
    // }
    Authentication.isAuthenticated = function (req, res, next) {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
        }
        var token = req.headers.authorization.split(' ')[1];
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
        //req.user = payload.sub;
        console.log(payload);
        next();
    };
    Authentication.issuerName = 'localhost';
    return Authentication;
}());
exports.Authentication = Authentication;
