const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();

// we tell express to use bodyParser for every request
app.use(bodyParser.json());

// we tell express to turn on CORS
// This middleware will now intercept every request
// and add the corresponding cors headers to the response.
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.route('/api/cats').get((req, res) => {
    res.send([
            { name: 'lilly' },
            { name: 'lucy' }
        ]);
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body); // 201 - Create smth
});

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body); // 200 - OK
});

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204); // 204 - No Content
});

app.listen(3000, () => console.log('Server is running...'));