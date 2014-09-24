var express = require('express');
var path = require('path');
var index = require('./routes/index');
var registration= require('./routes/registrieren'); 
var einloggen= require('./routes/einloggen');

module.exports = function (app) {

    //app.use('/', routes);
    //app.use('/einloggen',einloggen.einloggen);
    //app.use('/einloggenPost',einloggen.einloggenPost);
    //app.use('/registration',registration.registration);

    app.get('/', index);
    app.get('/index', index);

    app.get('/einloggen', einloggen.einloggen );
    app.post('/einloggen', einloggen.processPost);

    app.get('/registration', registration.registration);
    app.post('/registrieren', registration.processPost);



    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });



    // development error handler//{{{
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });//}}}

    return app; 
}
