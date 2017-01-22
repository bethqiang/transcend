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

    // This will update a user's position when they move, and send it to everyone
    // except the specific scene's user
    // socket.on('tick', userData => {
    //   socket.broadcast.emit('updatePosition', users.updatePosition(userData));
    // });

    socket.on('disconnect', () => {
      console.log(chalk.magenta(`${socket.id} has disconnected (╥﹏╥)`));
      socket.broadcast.emit('removeUser', users.removeUser(id));
    });

  });

};
