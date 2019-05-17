const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const Twit = require('twit');
const config = require('./config');
const utils = require('./utils');

const T = new Twit(config);

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    var params = {
        q: 'from:'+req.query.username,
        count: 100,
        result_type: 'mixed'
    };
    T.get('search/tweets', params, function (err, data, response) {
        console.log("Empty data: "+utils.isEmpty(data.statuses));
        res.render('tweet_view', {
            results: !utils.isEmpty(data.statuses) ? data.statuses: null,
            last: !utils.isEmpty(data.statuses)  ? data.statuses[data.statuses.length-1].id: null,
            first: !utils.isEmpty(data.statuses)  ? data.statuses[0].id: null
        });
    });
});

app.get('/delete', (req,res) => {
    var params = {
        id: req.query.id
    };
    console.log(params);
    T.post('statuses/destroy/:id', params, function (err, data, response) {
        console.log(data);
        res.redirect('/?message=Tweet deleted&username='+req.query.username);
    });
});


app.listen(8000, () => {
    console.log('Server is running at port 8000');
});
