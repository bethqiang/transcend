const express = require('express');
const app = express();
const path = require('path');

const morgan = require('morgan');
const chalk = require('chalk');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../browser')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/../index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(chalk.blue(`Contact from intelligent life received on port ${port}`)
);
});

app.use('/', (err, req, res, next) => {
  console.log(chalk.red('Houston, we have a problem'));
  console.log(chalk.red(`ERROR: ${err.message}`));
  res.sendStatus(err.status || 500);
});
