/// <reference path="../typings/index.d.ts"/>

import * as express from "express";
import * as passport from "passport";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as session from "express-session";

import * as PassportConfig from "./app/passport";
import * as Routes from "./app/routes";

const APP_SECRET = "somesecretkey";
const APP_PORT = 2900;

let app = express();

PassportConfig.setup(passport);

app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: APP_SECRET,
    saveUninitialized: true,
    resave: false
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers['origin']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    next();
});

app.use(passport.initialize());
app.use(passport.session());

Routes.setup(app, passport);

app.listen(APP_PORT);
console.log('Posiedon is hiding in port ' + APP_PORT);
