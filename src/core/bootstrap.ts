import * as express from 'express';

import * as http from 'http';
import {UserRoutes} from '../routes/user.routes';
//import { environment } from '../config/environment';
import {Database} from '../core/database'
import { Server } from './server';
//import { Seeds } from './seeds';
import { Authentication } from './middleware/Authentication'



const root = './';

export class Bootstrap {

    public defineExpressApp(app: express.Application) {
        app.set('port', process.env.PORT || Server.normalizePort(3000));
    }

    public startServer(app: express.Application): http.Server {
        return app.listen(app.get('port'));
    }


    public setupDatabase(app: express.Application): void {
        // Retrieve all queries
        // TODO: not sure if .then is wrong because queries is empty until then (should be await)
        console.log('Setting up database connection...')
        Database.createConnection();
        //console.log('Seeding database...')
        //Seeds.seedUsers();
    }


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

    public setupAuthentication(app: express.Application): void {
        console.log("Setting up authentication...")
        app.use(Authentication.isAuthenticated);
    }

    public setupRoutes(app: express.Application): void {
     
        // serving api routes
        // const generalRouter = new GeneralRoutes().router;
        //const usersRouter = new UsersRoutes().router;
        console.log("Setting up routes...")
        const userRouter = new UserRoutes().router;
        app.use('/api', userRouter);
        //app.use('/api', usersRouter);
    }

}
