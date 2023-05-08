import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import {scrollAnimation} from './World/scrollAnimation'
import loadModel from './World/model'
import createRenderer from './World/renderer'
import createCamera from './World/camera'
import parallaxAnimation from './World/parallaxAnimation'
import {handleProjectsSection, createGridColsContent } from './structure/projectsSection'
import { handleVerticalHeader, navBarHeader} from './structure/verticalHeader/handleVerticalHeader'

/**
 * Base
 */
// Debug
//const gui = new dat.GUI()
let gui

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#C2CEEA') 

// Model
loadModel(scene)

/**
 * Sizes
 */
const sizes = {
    width: document.querySelector('.webgl-container').clientWidth,
    height: document.querySelector('.webgl-container').clientHeight
}


/**
 * Camera
 */
const {cameraGroup, camera} = createCamera(sizes, gui)
scene.add(cameraGroup)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = createRenderer(sizes, camera, canvas)


scrollAnimation(sizes, camera)

// Cursor move for parallax
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    parallaxAnimation(cameraGroup, deltaTime, cursor)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

//Projects show/hide
createGridColsContent()
handleProjectsSection()

//Vertical header
handleVerticalHeader()
navBarHeader()
