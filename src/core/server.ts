// /* app/server.ts */

// // Import everything from express and assign it to the express variable
// import express from 'express';

// // Import WelcomeController from controllers entry point
// import {WelcomeController} from './controllers';

// // Create a new express application instance
// const app: express.Application = express();
// // The port the express app will listen on
// const port: number = 3000;

// // Mount the WelcomeController at the /welcome route
// app.use('/welcome', WelcomeController);

// // Serve the application at the given port
// app.listen(port, () => {
//     // Success callback
//     console.log(`Listening at http://localhost:${port}/`);
// });

import * as http from 'http';
import * as express from 'express';
// import { SwaggerUI } from './SwaggerUI';
//import { Database } from './database';

export class Server {

    public static normalizePort(port: string | number): number | string | boolean {
        const parsedPort: number = (typeof port === 'string') ? parseInt(port, 10) : port;
        if (isNaN(parsedPort)) { // named pipe
            return port;
        }
        if (parsedPort >= 0) { // port number
            return parsedPort;
        }
        return false;
    }

    constructor(public httpServer: http.Server) { }

    public use(app: express.Application): void {
        this.httpServer.on('listening', () => {
            this.onStartUp(app);
        });
        this.httpServer.on('error', (error) => {
            this.onError(error);
        });
        // this.httpServer.on('close', (error) => {
        //     //this.onClose();
        // });
    }

    public onStartUp(app: express.Application): void {
        console.log(`Aloha, your app is ready on ${app.get('host') || 'localhost'}:${app.get('port')}`);
    }

    public onError(error: any): void {
        if (error.syscall !== 'listen') {
            throw error;
        }
        switch (error.code) {
            case 'EACCES':
                console.error(`The Server requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port is already in use or blocked by the os`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    // public onClose() {
    //     //Database.clearDriver();
    // }
}
