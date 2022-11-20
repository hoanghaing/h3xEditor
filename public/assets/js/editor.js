const toolbar = document.querySelector(".toolbar");

let scene, renderer;
let pCamera, oCamera;
var container;
document.addEventListener("DOMContentLoaded", function() {
    container = document.querySelector('#editor-container');
    initialization();
    toolbarEvent();
    render();
});

function initialization() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    let light = new THREE.PointLight(0xd1d1d1, 0.7);
    light.position.set(0, 20, 0);
    scene.add(light);

    pCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 10000);
    pCamera.position.set(32, 29, 34);
    // Camera: x,y,z axis
    oCamera = new THREE.OrthographicCamera(0,0,0,0, -100, 1000);
    scene.background = new THREE.Color(0xbbbbbb);


    const grid = new THREE.GridHelper(50, 50, 0xffffff, 0xffffff);
    grid.material.opacity = 0.4;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    scene.add(grid);

    const axesHelper = new THREE.AxesHelper(15);
    scene.add(axesHelper);

    controls = new THREE.OrbitControls(pCamera, renderer.domElement);
    controls.update();
    controls.addEventListener('change', render);
}

function toolbarEvent() {
    $(toolbar).on("mouseover", ".toolElement", function (){
        $(this).children(".options").show();
    });
    $(toolbar).on("mouseleave", ".toolElement", function (){
        $(this).children(".options").hide();
    });
}

function render() {
    // gizmoDom.update();
    renderer.render(scene, pCamera);
}