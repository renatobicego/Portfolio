import { changeSectionInHeader } from "../../World/scrollAnimation"
import { handleAboutMe } from "./aboutMe"
import { blurEffect } from "./blurEffect"
import { closeHeader, openHeader } from "./headerAnimation"

//Open and close mobile nav bar 
const hamburgerIcon = document.querySelector('#menu-h')
const closeVerticalHeaderIcon = document.querySelector('#menu-h-close')


// Open and close header
const handleVerticalHeader = () => {
    //Mobile header
    hamburgerIcon.addEventListener('click', () => {
        //Animation open header and blur all other things
        openHeader()
        blurEffect()
    })
    closeVerticalHeaderIcon.addEventListener('click', () => {
        //Animation close header and delete blur effect 
        closeHeader()
        blurEffect()
    })

}

const handleNavItems = () => {
    document.querySelector("#design-nav-item-mobile").addEventListener('click', () => {
        blurEffect()
        closeHeader()
        changeSectionInHeader(1)
    })
    document.querySelector("#photos-nav-item-mobile").addEventListener('click', () => {
        blurEffect()
        closeHeader()
        changeSectionInHeader(2)
    })
    document.querySelector("#contact-nav-item-mobile").addEventListener('click', () => {
        blurEffect()
        closeHeader()
        changeSectionInHeader(3)
    })    
    document.querySelector("#design-nav-item").addEventListener('click', () => {
        changeSectionInHeader(1)
    })
    document.querySelector("#photos-nav-item").addEventListener('click', () => {
        changeSectionInHeader(2)
    })
    document.querySelector("#contact-nav-item").addEventListener('click', () => {
        changeSectionInHeader(3)
    })
}

const navBarHeader = () => {
    handleAboutMe()
    handleNavItems()
}


export {handleVerticalHeader, navBarHeader}