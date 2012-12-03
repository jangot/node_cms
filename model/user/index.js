var inherit = require('inherit');


var db = require(global.LIB_PATH + '/db');

module.exports = inherit({

    _id : null,

    __constructor : function() {

    },

    isAuth : function() {
        return this._auth;
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

            var ok = Boolean(result.length);
            if (ok) {
                this._id = result[0].id;
            }

            callback(result);
        }.bind(this));
    },

    getId : function() {
        return this._id;
    }



});
