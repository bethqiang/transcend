const randomcolor = require('randomcolor');
const users = [];

function User (id) {
  this.id = id;
  this.color = randomcolor();
  this.x = 4;
  this.y = 1.6;
  this.z = -4;
  this.xrot = 0;
  this.yrot = 0;
  this.zrot = 0;
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
  return users.filter(user => user.id !== id);
}

function updatePosition (userData) {
  const user = userFromId(userData.id);
  user.x = userData.position.x;
  user.y = userData.position.y;
  user.z = userData.position.z;
  user.xrot = userData.rotation.x;
  user.yrot = userData.rotation.y;
  user.zrot = userData.rotation.z;
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
