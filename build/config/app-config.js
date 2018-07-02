"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = __importStar(require("body-parser"));
// import * as compression from 'compression';
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.prototype.configure = function (app) {
        app
            // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true
        }));
        // HTTP request logger middleware for node.js
        // .use(morgan('dev'));
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
