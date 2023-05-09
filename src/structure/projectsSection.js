
import { urlImages } from "../data/urlImages"
import { urlProjects } from "../data/urlProjects"
import {disableScroll, enableScroll } from "./handleScroll"

const toggleProjectsDiv = (id) => {
  document.querySelector(id).classList.toggle('invisible')
  document.querySelector('header').classList.toggle('hidden')
  document.querySelector('body').classList.toggle('scrollbar-hide')
}

const openAnimation = (section) => {
  gsap.fromTo(section, {
      scale: 0
    },
    {
      scale: 1,
      duration: 0.2,
      onStart: () => {
        toggleProjectsDiv(section)
        disableScroll(window.scrollY)
    }
  })
}
const closeAnimation = (section) => {
  gsap.to(section, {
    scale: 0,
    duration: 0.2,
    onComplete: () => {
      toggleProjectsDiv(section)
      enableScroll()
    }
  })
}

const toggleToHideDiv = (toHideArr) => {
  toHideArr.forEach(s => {
    document.querySelector(s).classList.toggle('invisible')
  })
}


const handleProjectsSection = () => {
  
  const sectionsHTMl = [
    {
      name: '#projects',
      openBtn: '#projectsBtn',
      closeBtn: '#closeProjects'
    },
    {
      name: '#photography',
      openBtn: '#photosBtn',
      closeBtn: '#closePhotos'
    },
    {
      name: '#contact',
      openBtn: '#contactBtn',
      closeBtn: '#closeContact',
      toHide: ['#section4-title', '#contactBtn']
    },
  ]

  for(let section of sectionsHTMl){
    document.querySelector(section.openBtn).addEventListener('click', () => {
      section.toHide && toggleToHideDiv(section.toHide)
      openAnimation(section.name)
    })
    document.querySelector(section.closeBtn).addEventListener('click', () => {
      section.toHide && toggleToHideDiv(section.toHide)
      closeAnimation(section.name)
    })
  }

}


const createGridColsContent = () => {

  for(let project of urlProjects){
    document.querySelector(`#projects-grid`).innerHTML += `
         <a target="_blank" href=${project.href} class="rounded-sm">
           <img 
           class="md:h-full object-cover rounded-lg" 
           src=${project.imgSrc}
           alt=${project.altText}>
         </a>
       `
  }

  for (let image of urlImages){
    document.querySelector(`#photos-grid`).innerHTML += `
      <a target="_blank" href=${image.href} class="rounded-sm">
        <img 
        class="md:h-full object-cover rounded-sm" 
        src=${image.imgSrc}
        alt=${image.altText}>
      </a>
    `
  }
}

export {handleProjectsSection, createGridColsContent}