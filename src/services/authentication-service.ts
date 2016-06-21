/// <reference path="../../typings/index.d.ts"/>

import { inject, injectable } from "inversify";
import { Express } from "express-serve-static-core";

import { IAuthenticationService } from "./_namespace";
import { IAuthenticationManager, IPassport } from "../managers/_namespace";

@injectable()
export class AuthenticationService implements IAuthenticationService {

    private _passport: IPassport;

    constructor (
        @inject("IAuthenticationManager") authenticationManager: IAuthenticationManager,
        @inject("IPassport") passport: IPassport
    ) {
        this._passport = passport;
        authenticationManager.setupPassport();
    }

    public registerRoutes(app: Express): void {
        app.post('/session', this._authenticationPost.bind(this));
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

}
