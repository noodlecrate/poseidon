/// <reference path="../../typings/index.d.ts"/>

import { inject, injectable } from "inversify";
import { Express } from "express-serve-static-core";

import { IAuthenticationService } from "./_interfaces/authentication-service.i";
import { IAuthenticationManager, IPassport } from "../managers/managers.namespace";

@injectable()
export class AuthenticationService implements IAuthenticationService {

    private _passport: IPassport;

    constructor (
        @inject("IAuthenticationManager") authenticationManager: IAuthenticationManager,
        @inject("IPassport") passport: IPassport
    ) {
        authenticationManager.setupPassport();
    }

    public registerRoutes(app: Express): void {
        app.post('/authentication', this._authenticationPost.bind(this));
        app.get('/sessiontest', this._sessionTest.bind(this));
    }

    private _authenticationPost(req: any, res: any, next: any): any {
        this._passport.authenticate('local-login', (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                return next(new Error("No user found."));
            }

            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }

                console.log("successful login");

                return res.sendStatus(201);
            });
        })(req, res, next);
    }

    private _sessionTest(req: any, res: any): any {
        if (req.isAuthenticated()) {
            console.log(`the user ${req.user.username} has just hit /sessiontest`);
        } else {
            console.log(`an unauthenticated user has just hit /sessiontest`);
        }

        res.sendStatus(200);
    }

}
