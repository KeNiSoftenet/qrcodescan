const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', routes);



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;