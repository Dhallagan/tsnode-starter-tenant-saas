import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import moment from 'moment';

//import { environment } from '../../environments/environment';

export class Authentication {
    static issuerName = 'localhost';

    static isAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
          }
          var token = (req.headers.authorization as string ).split(' ')[1];
          // console.log(token)
        
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
          req['user'] = payload.sub;
          req['tenant'] = payload.tenant;
          next();
    }
}