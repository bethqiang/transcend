/* global io */

const socket = io(window.location.origin);

let scene = document.querySelector('a-scene');

// This is the person who connected
socket.on('connect', () => {
  console.log('Ahoy, matey! You\'ve made a persistent two-way connection to the server!');
  socket.on('createUser', user => {
    let avatar = document.createElement('a-box');
    scene.appendChild(avatar);
    avatar.setAttribute('color', user.color);
    avatar.setAttribute('position', `${user.x} ${user.y} ${user.z}`);
    socket.emit('getOthers');
  });
});

// When someone connects initially, this will get any other users already there
socket.on('getOthersCallback', users => {
  console.log('Checking to see if you have friends. You probably don\'t.');
  for (let i = 0; i < users.length; i++) {
    let avatar = document.createElement('a-box');
    scene.appendChild(avatar);
    avatar.setAttribute('color', users[i].color);
    avatar.setAttribute('position', `${users[i].x} ${users[i].y} ${users[i].z}`);
  }
});

// For those who are already there, this will update if someone new connects
socket.on('newUser', user => {
  console.log('Oh, maybe you do have friends! Someone else has arrived.');
  let avatar = document.createElement('a-box');
  scene.appendChild(avatar);
  avatar.setAttribute('color', user.color);
  avatar.setAttribute('position', `${user.x} ${user.y} ${user.z}`);
});
