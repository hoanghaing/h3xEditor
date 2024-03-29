const toolbar = document.querySelector(".toolbar");

let scene, renderer;
let pCamera, oCamera;
let gizmoDom, camSwitcher;
var container;
document.addEventListener("DOMContentLoaded", function() {
    container = document.querySelector('#editor-container');
    initialization();
    toolbarEvent();
    render();
});
document.addEventListener('fullscreen',  onFullscreenMode, false )
function initialization() {
    initRendererDom();
    initPointLight();
    initCamera();
    initGridHelper();
    initAxesHelper();
    initOrbitControls(pCamera);
    initGizMo();
    initCamSwitcher();
}

const initRendererDom = () => {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
}

const initPointLight = () => {
    let light = new THREE.PointLight(0xd1d1d1, 0.7);
    light.position.set(0, 20, 0);
    scene.add(light);
}

const initCamera = () =>{
    pCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 10000);
    pCamera.position.set(32, 29, 34);
    // Camera: x,y,z axis
    oCamera = new THREE.OrthographicCamera(0,0,0,0, -100, 1000);
    scene.background = new THREE.Color(0xbbbbbb);
}

const initGridHelper = () =>{
    const grid = new THREE.GridHelper(50, 50, 0xffffff, 0xffffff);
    grid.material.opacity = 0.4;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    scene.add(grid);
}

const initAxesHelper = () => {
    const axesHelper = new THREE.AxesHelper(15);
    scene.add(axesHelper);
}

const initOrbitControls = (camera) => {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.update();
    controls.addEventListener('change', render);
}

const initGizMo = () => {
    gizmoDom = new Gizmo(pCamera);
    container.appendChild(gizmoDom);
    gizmoDom.onAxisSelected = function(axis) {
        const camera = camSwitcher.scene.activeCamera;
        var distance = camera.position.distanceTo(controls.target);
        camera.position.copy(axis.direction.multiplyScalar(distance).add(controls.target));
        camera.lookAt(controls.target);
        camSwitcher.toOrtho();
    }

}

const initCamSwitcher = () => {
    camSwitcher = new CameraSwitcher(scene, renderer, pCamera, oCamera);
    camSwitcher.toPerspective();
    camSwitcher.onSwitch = function(camera) {
        controls.object = camera;
        controls.update();
        gizmoDom.camera = camera;
    }
}
function toolbarEvent() {
    $(toolbar).on("mouseover", ".toolElement", function (){
        $(this).children(".options").show();
    });
    $(toolbar).on("mouseleave", ".toolElement", function (){
        $(this).children(".options").hide();
    });
}
function onFullscreenMode() {
    pCamera.aspect = window.screen.width / window.screen.height;
    pCamera.updateProjectionMatrix();
    renderer.setSize( window.screen.width, window.screen.height );
}
function render() {
    gizmoDom.update();
    renderer.render(scene, scene.activeCamera);
}