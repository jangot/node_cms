var inherit = require('inherit');
var abstractController = require('./../lib/controllers/abstract');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
        view.title = 'Express';
        view.content = this._getParam('content');
    },

    testAction : function() {
        var view = this._getView();
        view.title = 'Test Action';
        view.content = 'Test content';
    },

    scrollAction : function() {
        var template = this._getParam('tmp');

        this.setTemplate('index', template);

        var view = this._getView();
        view.title = 'DEMO SCROLL';
    }

});
