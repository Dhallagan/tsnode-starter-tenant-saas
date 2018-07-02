import * as express from 'express';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';
//import { NextFunction, Request, Response } from 'express';
import * as http from 'http';
//import * as path from 'path';
//import { UsersRoutes } from '../app/users/users.routes';
//import {WelcomeController} from '../controllers';
import {WelcomeRoutes} from '../routes/welcome.routes';
//import { environment } from '../config/environment';
//import { Database } from './database';
//import { ApiError } from './middleware/api-error';
// import typeDefs from '../schemas/schema';
// import resolvers from '../resolvers/resolver';
//import { Authentication } from './middleware/authentication';
//import { Neo4j } from './middleware/neo4j';
//import { WebSocketServer } from './middleware/web-socket-server';
import { Server } from './server';
// import { exceptionHandler } from './api/exceptionHandler';
// import { extendExpressResponse } from './api/extendExpressResponse';
const root = './';

export class Bootstrap {

    public defineExpressApp(app: express.Application) {
        app.set('port', process.env.PORT || Server.normalizePort(3000));
    }

    public startServer(app: express.Application): http.Server {
        return app.listen(app.get('port'));
    }


    // public setupDatabase(app: express.Application): void {
    //     // Retrieve all queries
    //     // TODO: not sure if .then is wrong because queries is empty until then (should be await)
    //     Database.retrieveQueries().then(queries => {
    //         app.locals.dbQueries = queries;
    //     });

    //     app.use(Neo4j.setNeo4jSession);

    //     app.use(Neo4j.sessionCleanup);
    // }

    // public setupCors(app: express.Application): void {
    //     app.use((req: Request | any, res: Response, next: NextFunction) => {
    //         // TODO: don't think this is working
    //         const allowedOrigins = app.get('env') === 'development'
    //             ? ['http://localhost:4200' /*Dev web client*/, 'http://localhost:3000' /*Web client*/, 'http://localhost:8000' /*IOS client*/, 'http://10.0.0.10:3000' /*Phone client*/]
    //             : ['https://nean.io'];
    //         const origin = req.headers.origin;
    //         if (allowedOrigins.indexOf(origin) > -1) {
    //             res.setHeader('Access-Control-Allow-Origin', origin);
    //         }

    //         res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    //         res.header('Access-Control-Allow-Credentials', 'true');
    //         next();
    //     });
    // }
    public setupRoutes(app: express.Application): void {
     
        // serving api routes
        // const generalRouter = new GeneralRoutes().router;
        //const usersRouter = new UsersRoutes().router;
        console.log("Setting up routes...")
        const welcomeRouter = new WelcomeRoutes().router;
        app.use('/api', welcomeRouter);
        //app.use('/api', usersRouter);

        
    }
}
