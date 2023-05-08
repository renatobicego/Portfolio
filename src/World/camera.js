import * as THREE from 'three'

const createCamera = (sizes, gui) => {
    const cameraGroup = new THREE.Group()
    //cameraGroup.position.set(9, -0.8, 9)

    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)

    camera.position.set(9, -0.8, sizes.width < 1024 ? 3 : 9)
    cameraGroup.add(camera)

    // gui.add(camera.position, 'x').min(-100).max(100).step(0.1)
    // gui.add(camera.position, 'y').min(-100).max(100).step(0.1)
    // gui.add(camera.position, 'z').min(-100).max(100).step(0.1)

    return {cameraGroup, camera}
}

export default createCamera