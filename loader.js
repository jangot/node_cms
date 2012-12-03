var inherit = require('inherit');
var express = require('express');
var path = require('path');
var http = require('http');
var controllers = require('./lib/controllers/controller');

module.exports = inherit({

    _application : null,
    _controllersFolder : null,
    _viewFolder : null,
    _port : null,

    __constructor : function(application) {

        this._appliaction = application;
        this._port = 3000;
    },

    setControllers : function(path) {
        this._controllersFolder = path;
        return this;
    },

    setView : function(path) {
        this._viewFolder = path;
        return this;
    },

    setPort : function(port) {
        this._port = port;
        return this;
    },

    configure : function() {
        var self = this;
        var app = this._appliaction;

        app.configure(function(){
            app.use(express.favicon());
            app.use(express.logger('dev'));
            app.use(express.bodyParser());
            app.use(express.methodOverride());


            app.use(express.cookieParser());
            app.use(express.session({ secret: "keyboard cat" }));

            app.set('port', self._port);
            app.set('views', self._viewFolder);
            app.set('view engine', 'jade');




            app.use(express.static(path.join(__dirname, 'public')));

            app.use(app.router);
        });

        app.configure('development', function(){
            app.use(express.errorHandler());
        });

        return this;
    },

    createControllers : function() {
        new controllers.create(this._appliaction, this._controllersFolder);
        return this;
    },

    createServer : function() {
        var app = this._appliaction;

        http.createServer(app).listen(app.get('port'), function(){
            console.log("Bold appliaction on " + app.get('port'));
        });

        return this;
    }

});
