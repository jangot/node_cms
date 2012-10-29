var CONTROLLERS_PATH = __dirname + '/controllers';
var VIEWS_PATH = __dirname + '/views';

global.LIB_PATH = __dirname + '/lib';
global.MODEL_PATH = __dirname + '/model';

var express = require('express');
var Loader = require('./loader');

global.register = require(global.LIB_PATH + '/register');
global.register.setConfig(require(__dirname + '/conf/application'));



var app = express();

var loader = new Loader(app);
loader
    .setView(VIEWS_PATH)
    .setControllers(CONTROLLERS_PATH)
    .setPort(3000)
    .configure()
    .createControllers()
    .createServer()
;


