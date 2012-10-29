var inherit = require('inherit');

var SETTINGS_CONFIG = 'config';

module.exports = inherit({}, {

    _options : {},

    setOption : function(name, option) {
        this._options[name] = option;
    },

    getOption : function(name) {
        return this._options[name] || null;
    },

    setConfig : function(config) {
        this.setOption(SETTINGS_CONFIG, config);
        return this;
    },

    getConfig : function() {
        return this.getOption(SETTINGS_CONFIG);
    }
});
