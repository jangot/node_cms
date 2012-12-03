var inherit = require('inherit');


var abstractController = require('./../lib/controllers/abstract');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
        view.title = 'test';

        view.user = this._request.session.user;

        this.render();
    },

    testAction : function() {
        var view = this._getView();
        view.title = 'Test Action';
        view.content = 'Авторизация прошла успешно!!!';

        this.render();
    }

});
