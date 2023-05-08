

const parallaxAnimation = (cameraGroup, deltaTime, cursor) => {
    const parallaxX = cursor.x * 2
    const parallaxY = - cursor.y * 2
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 10 * deltaTime 
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 10 * deltaTime 
}

export default parallaxAnimation