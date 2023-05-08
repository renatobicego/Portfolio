import { gsap } from 'gsap'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const onLoadModelAnimation = (scene) => {
    gsap.fromTo(scene.rotation, 
        {
            y: Math.PI * 7/4,
        },
        {
            y: 0,
            duration: 6,
            ease: "expo.out"
        }
    )
    gsap.fromTo(['#section1', 'header'], 
        {
            opacity: 0
        },
        {
            opacity: 1,
            delay: 2,
            duration: 2,
            ease: "power1.out"
        }
    )

}

const loadModel = (scene) => {
    const gltfLoader = new GLTFLoader()

    gltfLoader.load(
        '/models/wanderer/scene.gltf',
        (gltf) => {
            document.querySelector('.scene').style.display = 'none'
            document.querySelector('header').style.visibility = 'visible'
            document.querySelectorAll('section').forEach(s => {
                s.style.visibility = 'visible'
            })

            gltf.scene.children[0].children[0].children[0].children[5].scale.set(0, 0, 0)
            scene.add(gltf.scene)
            onLoadModelAnimation(gltf.scene)
        },
    )
}

export default loadModel