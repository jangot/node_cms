var fs = require('fs');

module.exports.create = function(app, path) {
    this._path = path;
    this._application = app;
    this._actionRegExp = /Action$/;

    this._init();
}

module.exports.create.prototype = {

    _path : null,
    _application : null,
    _actionRegExp : null,

    _init : function() {
        var routersFiles = fs.readdirSync(this._path);

        for (var name in routersFiles) {
            var controllerName = routersFiles[name].split(/.js$/)[0];
            if (controllerName != 'abstract') {
                var Controller = require(this._path + '/' + controllerName);

                this._setController(controllerName, Controller);
            }
        }
    },

    _setController : function(name, Controller) {
        this._createAction(name, Controller);
        for (var actionName in Controller.prototype) {
            if (this._actionRegExp.test(actionName)) {
                actionName = actionName.split(this._actionRegExp)[0];
            } else {
                continue;
            }
            this._createAction(name, actionName, Controller);
        }


    },

    _createAction : function(controllerName, actionName, Controller) {


        var actionMathod;
        if (arguments.length == 2) {
            actionMathod = 'indexAction';
            Controller = actionName;
            actionName = 'index';
        } else if (arguments.length == 3) {
            actionMathod = actionName + 'Action';
        }

        function action(req, res) {
            if (!req.session.user) {
                console.log('no auth');
                if (controllerName != 'auth') {
                    res.redirect('/auth');
                }
            } else {
                console.log('auth');
            }

            var controller = new Controller(req, res);
            controller.setTemplate(controllerName, actionName)
            controller[actionMathod]();
            //controller.render();
        }
        if (arguments.length == 2) {
            this._application.get('/' + controllerName, action);
            this._application.post('/' + controllerName, action);
        } else if (arguments.length == 3) {
            this._application.get('/' + controllerName + '/' + actionName, action);
            this._application.post('/' + controllerName + '/' + actionName, action);

            this._application.get('/' + controllerName + '/' + actionName + '/*', action);
            this._application.post('/' + controllerName + '/' + actionName + '/*', action);        }
    }

}


