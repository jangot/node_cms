var mysql = require('mysql');

module.exports = {
    getClient : function() {
        var db = this._getConfig().db;

        var client = mysql.createClient({
            user: db.login,
            password: db.password
        });


        client.query('USE ' + db.name);

        return client;
    },

    _getConfig : function() {
        return global.register.getConfig();
    }

}
