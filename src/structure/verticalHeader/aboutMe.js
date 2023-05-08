
import { closeHeader, openHeader } from "./headerAnimation"
import { disableScroll, enableScroll } from "../handleScroll"
import { blurEffect } from "./blurEffect"

// About me pop up
const aboutMeMenu = document.querySelector('#about-me')

let userInMobile 

// animation when user opens about me
const openAnimation = () => {
    gsap.fromTo('#about-me', {
        scale: 0
    }, 
    {
        scale: 1,
        duration: 0.2,
        ease: "sine.out",
        onStart: () => {
            //Close animation mobile header if user is not in desktop
            if(userInMobile){
                closeHeader()
            }else{
                blurEffect()
                
            }
            disableScroll(window.scrollY)
            aboutMeMenu.classList.toggle('hidden')
            if(!userInMobile){
                aboutMeMenu.classList.toggle('lg:flex')
            }
        }
    })
}

// animation when user closes about me
const closeAnimation = () => {
    gsap.to('#about-me', {
        scale: 0,
        duration: 0.1,
        ease: "sine.out",
        onStart: () => {
            // IF user in mobile, open vertical header, else enable scroll again
            if(userInMobile){
                openHeader()
            }else{
                enableScroll()
                blurEffect()
            }
        },
        onComplete: () => {
            aboutMeMenu.classList.toggle('hidden')
            if(!userInMobile){
                aboutMeMenu.classList.toggle('lg:flex')
            }
        }
    })
}

export const handleAboutMe = () => {

    document.querySelector('#about-nav-item-mobile').addEventListener('click', () => {
        userInMobile = true
        openAnimation()
    })

    document.querySelector('#about-nav-item').addEventListener('click', () => {
        userInMobile = false
        // Disable about me animation again if about me pop up is already open
        if(aboutMeMenu.classList.contains('hidden')){
            openAnimation()
        }
    })

    document.querySelector('#aboutme-close').addEventListener('click', () => {
        closeAnimation()
    })
}