/* global io */

// `publish-location`, `camera`, `look-controls`, `wasd-controls` are set only
// on the user that the scene belongs to, so that only that scene can be manipulated
// by them.
// The other users will get the updated position via sockets.

// Right now, the boilerplate shapes are huge - should consider doing something about that

const socket = io(window.location.origin);

let scene = document.querySelector('a-scene');

// This is the person who connected
socket.on('connect', () => {
  console.log('Ahoy, matey! You\'ve made a persistent two-way connection to the server!');
  socket.on('createUser', user => {
    let avatar = document.createElement('a-box');
    scene.appendChild(avatar);
    avatar.setAttribute('id', user.id);
    avatar.setAttribute('color', user.color);
    avatar.setAttribute('position', `${user.x} ${user.y} ${user.z}`);
    avatar.setAttribute('publish-location', true);
    avatar.setAttribute('camera', true);
    avatar.setAttribute('look-controls', true);
    avatar.setAttribute('wasd-controls', true);
    socket.emit('getOthers');
  });
});

// When someone connects initially, this will get any other users already there
socket.on('getOthersCallback', users => {
  console.log('Checking to see if you have friends.');
  for (let i = 0; i < users.length; i++) {
    let avatar = document.createElement('a-box');
    scene.appendChild(avatar);
    avatar.setAttribute('id', users[i].id);
    avatar.setAttribute('color', users[i].color);
    avatar.setAttribute('position', `${users[i].x} ${users[i].y} ${users[i].z}`);
  }
  socket.emit('haveGottenOthers');
});

// For those who are already there, this will update if someone new connects
socket.on('newUser', user => {
  console.log('Oh, maybe you do have friends! Someone else has arrived.');
  let avatar = document.createElement('a-box');
  scene.appendChild(avatar);
  avatar.setAttribute('id', user.id);
  avatar.setAttribute('color', user.color);
  avatar.setAttribute('position', `${user.x} ${user.y} ${user.z}`);
});

// For other users except the one that the scene belongs to, update the
// scene for the user that moved
socket.on('updatePosition', user => {
  console.log('Updating position...');
  const otherAvatar = document.querySelector(`#${user.id}`);
  otherAvatar.setAttribute('position', `${user.x} ${user.y} ${user.z}`);
});

// Remove a user's avatar when they disconnect from the server
socket.on('removeUser', user => {
  console.log('Removing user.');
  const avatarToBeRemoved = document.querySelector(`#${user.id}`);
  scene.remove(avatarToBeRemoved); // Remove from scene
  avatarToBeRemoved.parentNode.removeChild(avatarToBeRemoved); // Remove from DOM
});
