"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("../routes/user.routes");
//import { environment } from '../config/environment';
var database_1 = require("../core/database");
var server_1 = require("./server");
//import { Seeds } from './seeds';
var Authentication_1 = require("./middleware/Authentication");
var root = './';
var Bootstrap = /** @class */ (function () {
    function Bootstrap() {
    }
    Bootstrap.prototype.defineExpressApp = function (app) {
        app.set('port', process.env.PORT || server_1.Server.normalizePort(3000));
    };
    Bootstrap.prototype.startServer = function (app) {
        return app.listen(app.get('port'));
    };
    Bootstrap.prototype.setupDatabase = function (app) {
        // Retrieve all queries
        // TODO: not sure if .then is wrong because queries is empty until then (should be await)
        console.log('Setting up database connection...');
        database_1.Database.createConnection();
        //console.log('Seeding database...')
        //Seeds.seedUsers();
    };
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
    Bootstrap.prototype.setupAuthentication = function (app) {
        console.log("Setting up authentication...");
        app.use(Authentication_1.Authentication.isAuthenticated);
    };
    Bootstrap.prototype.setupRoutes = function (app) {
        // serving api routes
        // const generalRouter = new GeneralRoutes().router;
        //const usersRouter = new UsersRoutes().router;
        console.log("Setting up routes...");
        var userRouter = new user_routes_1.UserRoutes().router;
        app.use('/api', userRouter);
        //app.use('/api', usersRouter);
    };
    return Bootstrap;
}());
exports.Bootstrap = Bootstrap;
