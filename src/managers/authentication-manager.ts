/// <reference path="../../typings/index.d.ts"/>

import { inject } from "inversify";

import { Strategy as LocalStrategy } from "passport-local";
import { IPassport } from "./_interfaces/passport.i";
import { IUserManager } from "./_interfaces/user-manager.i";
import { IAuthenticationManager } from "./_interfaces/authentication-manager.i";

@inject("IPassport", "IUserManager")
export class AuthenticationManager implements IAuthenticationManager {

    private _passport: IPassport;
    private _userManager: IUserManager;

    constructor (passport: IPassport, userManager: IUserManager) {
        this._passport = passport;
        this._userManager = userManager;
    }

    public setupPassport(): void {
        this._passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        this._passport.deserializeUser((id, done) => {
            done(null, this._userManager.getById(id));
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
