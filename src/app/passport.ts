/// <reference path="../../typings/index.d.ts"/>

import { Strategy as LocalStrategy } from "passport-local";

let users = [
    { id: 1, username: 'jameskmonger' },
    { id: 2, username: 'jamesrichford' }
];

export function setup (passport: any) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        let userForId = users.filter(u => u.id === id)[0];
        done(null, userForId);
    });

    passport.use('local-login', new LocalStrategy((username, password, done) => {
        let usersForUsername = users.filter(u => u.username === username);

        if (usersForUsername.length === 0) {
            return done (
                new Error("No user found.")
            );
        }

        if (password !== "correct") {
            return done (
                new Error("Invalid password.")
            );
        }

        return done (null, usersForUsername[0]);
    }));

    // app.post('/session', do all our passport stuff here);

}
