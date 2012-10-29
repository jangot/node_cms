var inherit = require('inherit');


var db = require(global.LIB_PATH + '/db');

module.exports = inherit({

    __constructor : function() {

    },

    auth : function(login, password, callback) {
        if (!callback) {
            callback = function(result) {
                console.log(result);
            };
        }

        var client = db.getClient();

        var query = "SELECT * FROM user WHERE name = '" + login + "' AND password = '" + password + "'";
        client.query(query, function(error, result, fields) {
            if (error) {
                callback(false);
                return;
            }
            callback(Boolean(result));
        });
    }



});
