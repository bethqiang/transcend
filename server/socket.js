const chalk = require('chalk');

module.exports = io => {

  io.on('connection', socket => {
    console.log(chalk.yellow('You made a new friend, how cute'));
    console.log(chalk.yellow(`${socket.id} has connected`));

    // Possible todo: create rooms/namespaces

    socket.on('disconnect', () => {
      console.log(chalk.magenta(`${socket.id} has disconnected (╥﹏╥)`));
    });

  });

};
