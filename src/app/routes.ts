/// <reference path="../../typings/index.d.ts"/>

export function setup (app: any, passport: any) {

    // app.post('/session', do all our passport stuff here);

    app.get('/wickawicka', (req, res, next) => {
        console.log(req.user);
    });

    app.post('/session', (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
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
    });
}
