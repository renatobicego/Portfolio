
import { disableScroll, enableScroll } from "../handleScroll"

const aboutMeMenu = document.querySelector('#about-me')
const hamburgerIcon = document.querySelector('#menu-h')
const verticalHeader = document.querySelector('.vertical-header')

const toggleVerticalHeader = () => {
    if(aboutMeMenu.classList.contains('hidden')){
        hamburgerIcon.classList.toggle('hidden')
    }
    verticalHeader.classList.toggle('hidden')
}

const openHeader = () => {
    disableScroll(window.scrollY)
    gsap.to(".vertical-header", {
        x: -80,
        duration: 0.5,
        onStart: toggleVerticalHeader
    })
}

const closeHeader = () => {
    enableScroll()
    gsap.to(".vertical-header", {
        x: 80,
        duration: 0.5,
        onComplete: toggleVerticalHeader
    })
}

export {openHeader, closeHeader}