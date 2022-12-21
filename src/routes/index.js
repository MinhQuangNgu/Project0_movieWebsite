const product = require('./product');
const user = require('./user');
const kind = require('./kind');

function router(app){
    app.use('/product',product);
    app.use('/user',user);
    app.use('/kind',kind);
}

module.exports = router;