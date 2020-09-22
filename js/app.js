//3 THINGS THAT WE NEED: Scene, Camera, and Renderer
let x = 0
let y = 0
let dx = 0.03
let dy = 0.03
let speed = 0.02


//Three.js
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(1000, 750);
document.body.appendChild(renderer.domElement);  



///BoxGeometry 
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial( {color: "#A020F0"} );
let cube = new THREE.Mesh(geometry, material);
 
scene.add(cube);

camera.position.z=5;


function animate() {
    requestAnimationFrame(animate);
    ///cube.position.x += 0.05;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    if (cube.position.x >= 2.8 || cube.position.x <= -2.8){
        dx = -dx; 
        cube.material.color.set("#3385F7");     
    }    
    cube.position.x = cube.position.x + dx;

    if (cube.position.y >=1.9 || cube.position.y <= -1.9){
        dy = -dy
    }    
    cube.position.y = cube.position.y + dy;
}

animate();