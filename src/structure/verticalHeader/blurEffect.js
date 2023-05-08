// Blur other elements if mobile nav bar is active
export const blurEffect = () => {
    document.querySelectorAll('section').forEach(element => {
        element.classList.toggle('blur-effect')
    })
    document.querySelector('.webgl-container').classList.toggle('blur-effect')
}