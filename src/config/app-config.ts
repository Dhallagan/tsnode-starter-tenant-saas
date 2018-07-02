import * as path from 'path';
// import * as cors from 'cors';
// import * as morgan from 'morgan';
// import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// import * as compression from 'compression';

export class AppConfig {
    public configure(app: express.Application): void {

        app
            // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

            // HTTP request logger middleware for node.js
            // .use(morgan('dev'));
    }
}
