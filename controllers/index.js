var inherit = require('inherit');
var User = require(global.MODEL_PATH + '/user');

var abstractController = require('./../lib/controllers/abstract');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
//        view.title = JSON.stringify();

        view.title = 'test';
        var params = this._getParams();

        var user = new User();
        user.auth(params.login, params.pass, function(result) {
            if (result) {
                this._result.redirect('/index/test');
            } else {
                view.content = 'Ошибка авторизации!';
                this.render();
            }
        }.bind(this));

    },

    testAction : function() {
        var view = this._getView();
        view.title = 'Test Action';
        view.content = 'Авторизация прошла успешно!!!';

        this.render();
    }

//    testAction : function() {
//        var view = this._getView();
//        view.title = 'Test Action';
//        view.content = 'Test content';
//    },
//
//    scrollAction : function() {
//        var template = this._getParam('tmp');
//
//        this.setTemplate('index', template);
//
//        var view = this._getView();
//        view.title = 'DEMO SCROLL';
//    }

});
