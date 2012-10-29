var inherit = require('inherit');
var User = require(global.MODEL_PATH + '/user');

var abstractController = require('./../lib/controllers/abstract');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
        view.title = 'Express';
        view.content = this._getParam('content');


        var user = new User();
        user.auth('jangot', '111', function(result) {
            console.log(111, result);
        });

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
