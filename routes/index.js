

module.exports = {
    index : function(req, res){
        console.log(req.route);
        var test = 'baba';

        for (var i = 0; i < 10; i++) {
            test += (' ' + i);
        }


        res.render('index', {
            title: 'Express',
            content: test
        });
    },

    test : function(req, res){
        console.log(req.route);
        var test = 'baba';

        for (var i = 0; i < 20; i++) {
            test += (' ' + i);
        }


        res.render('test', {
            title: 'Express',
            content: test
        });
    },

    my : function(req, res) {
        res.render('index', {
            title: 'my',
            content: "Ouuu"
        });
    }
}

//for (var name in routes) {
//    exports[name] = routes[name];
//}
