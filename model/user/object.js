var inherit = require('inherit');

module.exports = inherit({

    __constructor : function() {

    },

    auth : function(login, password) {
        console.log(this.getConfig());
    },

    _getConfig : function() {
        return global.register.getConfig();
    }

});