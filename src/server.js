import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.get('/', (req, res) => res.json({ hello: 'world'}));

app.listen(8080);
console.log('listening on port 8080');
