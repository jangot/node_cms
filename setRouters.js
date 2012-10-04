var fs = require('fs');

var routes = {};

var routesPath = '/routes'

var path = __dirname + routesPath;

var routersFiles = fs.readdirSync(path);
for (var name in routersFiles) {

    var dirObject = path + '/' + routersFiles[name];

    var stats = fs.statSync(dirObject);
    if (stats.isFile()) {
        var fileNameWithoutExtended = routersFiles[name].split(/.js$/)[0];
        routes[fileNameWithoutExtended] = require('.' + routesPath + '/' + fileNameWithoutExtended);
    }

}


exports.set = function(app) {
    app.get('/', routes.index.index);
    for (var route in routes) {
        setPath(app, route, routes[route]);
    }
}

setPath = function(app, name, routes) {
    app.get('/' + name, routes.index);
    for (var route in routes) {
        if (!/^_/.test(route)) {
            app.get('/' + name + '/' + route, routes[route]);
            app.get('/' + name + '/' + route + '/*', routes[route]);
        }
    }
}
