var inherit = require('inherit');
var abstractController = require('./../lib/controllers/abstract');

module.exports = inherit(abstractController, {

    indexAction : function() {
        var view = this._getView();
        view.title = 'Test controller';
        view.content = 'Index action';
    }

});
