"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../core/database");
var server_1 = require("./server");
//import { Seeds } from './seeds';
var Authentication_1 = require("./middleware/Authentication");
var user_routes_1 = require("../routes/user.routes");
var dotenv = __importStar(require("dotenv"));
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
    Bootstrap.prototype.setupEnviroment = function (app) {
        console.log('Setting up enviroment variables...');
        dotenv.config({ path: "./src/config/.env.development" });
        console.log(process.env);
    };
    Bootstrap.prototype.setupDatabase = function (app) {
        // Retrieve all queries
        // TODO: not sure if .then is wrong because queries is empty until then (should be await)
        console.log('Setting up database connection...');
        database_1.Database.createConnection();
        //console.log('Seeding database...')
        //Seeds.seedUsers();
    };
    Bootstrap.prototype.setupCors = function (app) {
        console.log("Setting up CORS...");
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
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
