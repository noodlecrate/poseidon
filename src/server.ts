/// <reference path="../typings/index.d.ts"/>

import * as express from "express";
import * as passport from "passport";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as session from "express-session";

import * as Routes from "./app/routes";

import { AuthenticationManager } from "./managers/authentication-manager";
import { UserManager } from "./managers/user-manager";
import { ReviewManager } from "./managers/review-manager";

import { UserRepository } from "./repositories/user-repository";
import { ReviewRepository } from "./repositories/review-repository";

import { UserSerializer } from "./serializers/user-serializer";
import { ReviewSerializer } from "./serializers/review-serializer";

import { ReviewService } from "./services/review-service";

const APP_SECRET = "somesecretkey";
const APP_PORT = 3000;

let app = express();

let userRepository = new UserRepository();
let reviewRepository = new ReviewRepository(userRepository);

let userSerializer = new UserSerializer();
let reviewSerializer = new ReviewSerializer(userSerializer);

let userManager = new UserManager(userRepository);
let reviewManager = new ReviewManager(reviewRepository, reviewSerializer);

let authenticationManager = new AuthenticationManager(passport, userManager);

let reviewService = new ReviewService(reviewManager);

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

//Routes.setup(app, passport);

reviewService.registerRoutes(app);

app.listen(APP_PORT);
console.log('Posiedon is hiding in port ' + APP_PORT);
