// import * as http from 'http';
// import * as express from 'express';
// import { Request } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { Repository, getRepository } from "typeorm";
// import { User } from "../entity/User";
// import { User } from "../entity/User";


// interface Request {
//   user: User;
//   isisAuthenticated: any;
// }

// export class Authentication {

//   public static isAuthenticated(req: Request) {
//     var token = (req.headers['authorization'] && req.headers.authorization.split(' ')[1]);
//     try {
//       return jwt.verify(token, <string>process.env.TOKEN_SECRET);
//     } catch (err) {
//       return false;
//     }
//   }

//   public isAuthenticatedAndUser(payload) {
//     User.findById(payload.sub, function(err, user) {
//       req.user = user;
//       next();
//     });
//   }



// }


