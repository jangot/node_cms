exports.index = function(req, res){
    console.log(req)
    var test = 'baba';

    for (var i = 0; i < 100; i++) {
        test += (' ' + i);
    }


    res.render('test', {
        title: 'Express',
        content: test
    });
};