var inherit = require('inherit');
var abstractController = require('./../lib/controllers/abstract');
var User = require(global.MODEL_PATH + '/user');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
        view.title = 'Auth form';

        this.render();
    },

    inAction : function() {
        var view = this._getView();
        view.title = 'Auth';
        this.render();
    },

    formAction : function() {
        var params = this._getParams();

        var user = new User();
        user.auth(params.login, params.pass, function(result) {
            if (result) {
                this._request.session.user = user.getId();
                this._result.redirect('/index');
            } else {
                this._result.redirect('/auth');
            }
        }.bind(this));
    }

});
