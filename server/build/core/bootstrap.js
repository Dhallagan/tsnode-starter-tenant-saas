"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var express = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var database_1 = require("../core/database");
var server_1 = require("./server");
var seeds_1 = require("./seeds");
var storage_1 = require("./storage");
var authentication_1 = require("./middleware/authentication");
var routes_1 = require("../routes");
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
    };
    Bootstrap.prototype.setupDatabase = function (app) {
        var _this = this;
        // Retrieve all queries
        // TODO: not sure if .then is wrong because queries is empty until then (should be await)
        console.log('Setting up database connection...');
        console.log(process.env.STRIPE_SKEY);
        database_1.Database.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Connected to DB');
                console.log('Seeding database...');
                // Seeds.seedUsers();
                seeds_1.Seeds.seedPlans();
                seeds_1.Seeds.seedPropertyTypes();
                return [2 /*return*/];
            });
        }); });
    };
    Bootstrap.prototype.setupCors = function (app) {
        console.log("Setting up CORS...");
        // app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', 'http://localhost:8081' );
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
        //     res.header('Access-Control-Allow-Credentials', 'true');
        //     next();
        // });
        app.use(cors_1.default());
    };
    Bootstrap.prototype.setupStorage = function (app) {
        console.log("Setting up local storage...");
        // Maybe I do something here?
        app.use(express.static('./public'));
        console.log("Setting up AWS storage...");
        // Maybe I do something here?
        var s = new storage_1.Storage();
    };
    Bootstrap.prototype.setupAuthentication = function (app) {
        console.log("Setting up authentication...");
        app.use(authentication_1.Authentication.isAuthenticated);
    };
    Bootstrap.prototype.setupRoutes = function (app) {
        // serving api routes
        // const generalRouter = new GeneralRoutes().router;
        //const usersRouter = new UsersRoutes().router;
        console.log("Setting up routes...");
        var userRouter = new routes_1.UserRoutes().router;
        app.use('/api', userRouter);
        var companyRouter = new routes_1.CompanyRoutes().router;
        app.use('/api', companyRouter);
        var tenantRouter = new routes_1.TenantRoutes().router;
        app.use('/api', tenantRouter);
        var planRouter = new routes_1.PlanRoutes().router;
        app.use('/api', planRouter);
        var propertyRouter = new routes_1.PropertyRoutes().router;
        app.use('/api', propertyRouter);
        var unitRouter = new routes_1.UnitRoutes().router;
        app.use('/api', unitRouter);
        var listingRouter = new routes_1.ListingRoutes().router;
        app.use('/api', listingRouter);
    };
    return Bootstrap;
}());
exports.Bootstrap = Bootstrap;
