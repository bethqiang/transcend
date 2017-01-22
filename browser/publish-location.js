/* global AFRAME socket scene */

// This component fires an event on each render loop for each entity it's attached to (aka, every)

AFRAME.registerComponent('publish-location', {
  tick: function () {
    // socket.on('getOthersCallback', users => {
    //   console.log('Checking to see if you have friends.');
    //   for (let i = 0; i < users.length; i++) {
    //     let avatar = document.createElement('a-box');
    //     scene.appendChild(avatar);
    //     avatar.setAttribute('id', users[i].id);
    //     avatar.setAttribute('color', users[i].color);
    //     avatar.setAttribute('position', `${users[i].x} ${users[i].y} ${users[i].z}`);
    //   }
    // });

    const el = this.el;
    socket.emit('tick', { id: el.id, position: el.getAttribute('position') });
  }
});
