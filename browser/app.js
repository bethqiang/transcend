/* global io */

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Ahoy, matey! You\'ve made a persistent two-way connection to the server!');
});
