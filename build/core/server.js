"use strict";
// /* app/server.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// import { SwaggerUI } from './SwaggerUI';
//import { Database } from './database';
var Server = /** @class */ (function () {
    function Server(httpServer) {
        this.httpServer = httpServer;
    }
    Server.normalizePort = function (port) {
        var parsedPort = (typeof port === 'string') ? parseInt(port, 10) : port;
        if (isNaN(parsedPort)) { // named pipe
            return port;
        }
        if (parsedPort >= 0) { // port number
            return parsedPort;
        }
        return false;
    };
    Server.prototype.use = function (app) {
        var _this = this;
        this.httpServer.on('listening', function () {
            _this.onStartUp(app);
        });
        this.httpServer.on('error', function (error) {
            _this.onError(error);
        });
        // this.httpServer.on('close', (error) => {
        //     //this.onClose();
        // });
    };
    Server.prototype.onStartUp = function (app) {
        console.log("Aloha, your app is ready on " + (app.get('host') || 'localhost') + ":" + app.get('port'));
    };
    Server.prototype.onError = function (error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        switch (error.code) {
            case 'EACCES':
                console.error("The Server requires elevated privileges");
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error("Port is already in use or blocked by the os");
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
    return Server;
}());
exports.Server = Server;
