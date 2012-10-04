var inherit = require('inherit');

// base "class"
module.exports = inherit({

    _request : null,
    _result : null,
    _template : null,
    _view : null,
    _params : null,

    __constructor : function(req, res) {
        this._request = req;
        this._result = res;
        this._view = {};
        this._params = {};

        this._createParams();
    },

    setTemplate : function(folder, file) {
        if (arguments.length == 1) {
            this._template = folder;
        } else {
            this._template = folder + '/' + file;
        }
        return this;
    },

    render : function() {
        this._result.render(
            this._template,
            this._getView()
        );
    },

    _createParams : function() {
        var routeParams = this._request.route.params[0];
        if (routeParams) {
            routeParams = routeParams.split('/');
            for (var i = 0; i < routeParams.length; i += 2) {
                this._params[routeParams[i]] = routeParams[i + 1];
            }
        }

        var body = this._request.body;
        for (var bodyName in body) {
            this._params[bodyName] = body[bodyName];
        }

        var query = this._request.query;
        for (var queryName in query) {
            this._params[queryName] = query[queryName];
        }
    },

    _getParams : function() {
        return this._params;
    },

    _getParam : function(name) {
        return this._getParams()[name];
    },

    _getView : function() {
        return this._view;
    }
});