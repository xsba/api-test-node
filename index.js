const express = require('express');
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 3000

app.use(morgan('tiny'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.send(`PID:${process.pid}, port:${port}`));
