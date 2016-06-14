/// <reference path="../../typings/index.d.ts"/>

export function setup (app: any, passport: any) {

    // app.post('/session', do all our passport stuff here);

    app.post('/session', passport.authenticate('local-login', {
        successRedirect : '/profile',
        failureRedirect : '/login'
    }));

}
