/* global AFRAME THREE */

AFRAME.registerComponent('ground', {
  init: function () {
    const geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    for (let i = 0; i < geometry.vertices.length; i++) {
      const vertex = geometry.vertices[i];
      vertex.x += Math.random() * 10 - 5;
      vertex.y += Math.random() * 1;
      vertex.z += Math.random() * 10 - 5;
    }
    for (let i = 0; i < geometry.faces.length; i++) {
      let face = geometry.faces[i];
      face.vertexColors[0] = new THREE.Color(0x57D339);
      face.vertexColors[1] = new THREE.Color(0x4B9739);
      face.vertexColors[2] = new THREE.Color(0x337225);
    }
    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
  }
});
