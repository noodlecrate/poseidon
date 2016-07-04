/// <reference path="../../typings/index.d.ts"/>

import { inject, injectable } from "inversify";

import { Strategy as LocalStrategy } from "passport-local";

import {
    IPassport,
    IUserManager,
    IAuthenticationManager
} from "./_namespace";

@injectable()
export class AuthenticationManager implements IAuthenticationManager {

    private _passport: IPassport;
    private _userManager: IUserManager;

    constructor (
        @inject("IPassport") passport: IPassport,
        @inject("IUserManager") userManager: IUserManager
    ) {
        this._passport = passport;
        this._userManager = userManager;
    }

    public setupPassport(): void {
        this._passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        this._passport.deserializeUser((id, done) => {
            done(null, this._userManager.getModelById(id));
        });

        this._passport.use('local-login', new LocalStrategy((username, password, done) => {
            let user = this._userManager.attemptLogin(username, password);

            if (!user) {
                return done (
                    new Error("Invalid username or password")
                );
            }

            return done (null, user);
        }));
    }

}
