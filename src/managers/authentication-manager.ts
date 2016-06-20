/// <reference path="../../typings/index.d.ts"/>

import { Strategy as LocalStrategy } from "passport-local";
import { IPassport } from "./_interfaces/passport.i";
import { UserManager } from "./user-manager";

export class AuthenticationManager {

    private _passport: IPassport;
    private _userManager: UserManager;

    constructor (passport: IPassport, userManager: UserManager) {
        this._passport = passport;
        this._userManager = userManager;

        this._setupPassport();
    }

    private _setupPassport(): void {
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
