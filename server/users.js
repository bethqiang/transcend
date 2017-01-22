const randomcolor = require('randomcolor');
const users = [];

function User (id) {
  this.id = id;
  this.color = randomcolor();
  this.x = Math.random() * 10 - 5;
  this.y = 0;
  this.z = Math.random() * 5 - 5;
}

function createUser (id) {
  const user = new User(id);
  users.push(user);
  return user;
}

function userFromId (id) {
  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      user = users[i];
      break;
    }
  }
  return user;
}

function getOtherUsers (id) {
  console.log('getOtherUsers', users);
  return users.filter(user => user.id !== id);
}

function updatePosition (userData) {
  const user = userFromId(userData.id);
  user.x = userData.position.x;
  user.y = userData.position.y;
  user.z = userData.position.z;
  return user;
}

function removeUser (id) {
  const user = userFromId(id);
  const index = users.findIndex(userToRemove => userToRemove.id === id);
  users.splice(index, 1);
  return user;
}

module.exports = {
  users,
  createUser,
  userFromId,
  getOtherUsers,
  updatePosition,
  removeUser
};
