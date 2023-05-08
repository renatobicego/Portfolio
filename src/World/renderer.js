import * as THREE from 'three'

const createRenderer = (sizes, camera, canvas) => {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    window.addEventListener('resize', () =>
    {
        document.querySelector('#about-me').style.transform = 'translate(-50%, -50%)'

        // Update sizes
        sizes.width = document.querySelector('.webgl-container').clientWidth
        sizes.height = document.querySelector('.webgl-container').clientHeight

        
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    })

    return renderer
}

export default createRenderer