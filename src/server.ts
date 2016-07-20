/// <reference path='../typings/index.d.ts'/>

import 'reflect-metadata';

import * as express from 'express';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

import kernel from './inversify.config';
import { IServiceManager } from './services/_namespace';

const APP_SECRET = 'somesecretkey';
const APP_PORT = 3000;

let app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: APP_SECRET,
    saveUninitialized: true,
    resave: false
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');

    /* tslint:disable */
    // see github tslint#1419
    res.header('Access-Control-Allow-Origin', req.headers['origin']);
    /* tslint:enable */

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    next();
});

app.use(passport.initialize());
app.use(passport.session());

let serviceManager = kernel.get<IServiceManager>('IServiceManager');
serviceManager.registerRoutes(app);

app.listen(APP_PORT);
console.log('Posiedon is hiding in port ' + APP_PORT);
