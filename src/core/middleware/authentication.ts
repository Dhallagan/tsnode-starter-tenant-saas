import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import moment from 'moment';

//import { environment } from '../../environments/environment';

export class Authentication {
    static issuerName = 'localhost';

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

    static isAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
          }
          var token = (req.headers.authorization as string ).split(' ')[1];
        
          var payload;
          try {
            payload = jwt.verify(token, 'secretsecretsecret');
          }
          catch (err) {
            return res.status(401).send({ message: err.message });
          }
        
          if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Token has expired' });
          }
          //req.user = payload.sub;
          console.log(payload)
          next();
    }
}