/// <reference path="../typings/index.d.ts"/>

import * as express from "express";
import * as passport from "passport";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as session from "express-session";

const APP_SECRET = "somesecretkey";
const APP_PORT = 2900;

let app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: APP_SECRET
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(APP_PORT);
console.log('Posiedon is hiding in port ' + APP_PORT);
