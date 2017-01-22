const chalk = require('chalk');
const users = require('./users');

module.exports = io => {

  io.on('connection', socket => {
    console.log(chalk.yellow('You made a new friend, how cute'));
    console.log(chalk.yellow(`${socket.id} has connected`));

    // Possible todo: create rooms/namespaces

    const id = socket.id;
    users.createUser(id);
    const user = users.userFromId(id);

    // This goes to the user that just connected, I think
    socket.emit('createUser', user);
    // This goes to the users who are already connected
    socket.broadcast.emit('newUser', user);

    // This will send all of the current users to the user that just connected
    socket.on('getOthers', () => {
      socket.emit('getOthersCallback', users.getOtherUsers(id));
    });

    socket.on('disconnect', () => {
      console.log(chalk.magenta(`${socket.id} has disconnected (╥﹏╥)`));
      // need to remove user from users array
    });

  });

};
