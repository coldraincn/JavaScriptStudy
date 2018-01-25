const app = require('./lib/myexpress');

app.get('/', function (req, res) {
    console.log('hello')
})
app.listen(3000, '127.0.0.1');