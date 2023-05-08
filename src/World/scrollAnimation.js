
gsap.registerPlugin(ScrollToPlugin);

//Scroll variables
let previousScroll = 0
let scrollY = window.scrollY
let deltaScroll
let currentSection = 0
let animationRunning = false
let camera
let cameraPositions


//Sections of the html to scroll to
const sectionsHTML = [{y: 0}, '#section2', '#section3', "#section4", 'footer']

//Check if projects div or mobile nav bar is active 
// Don't allow animation if is active
const checkIfProjectsActive = () => {
    let isActive = false

    document.querySelectorAll('.projects').forEach(d => {
        if(!d.classList.contains('hidden')){
            isActive = true
        }
    })

    if(!document.querySelector('.vertical-header').classList.contains('hidden')){
        isActive = true
    }

    if(!document.querySelector('#about-me').classList.contains('hidden')){
        isActive = true
    }
    return isActive
}

const scrollAnimation = (sizes, cam) => {
    camera = cam

    //Camera positions between sections
    cameraPositions = [
        {
            x: 9, 
            y: -0.8, 
            z: sizes.width < 1024 ? 3 : 9
        },
        {
            x: -10.6,
            y: 1.7,
            z: 16.4
        },
        {
            x: -5.7,
            y: 21.3,
            z: -3.2
        },
        {
            x: -3,
            y: 1,
            z: 2.5
        },
        {
            x: -3,
            y: 1,
            z: 2.5
        }
    ]

    //When user scrolls
    window.addEventListener('scroll', () => {
        //Don't animate if user is in projects div scrolling
        scrollY = window.scrollY

        deltaScroll = scrollY - previousScroll
        //If an animations is not running, animation will start
        //If user is not in projects div
        if(!animationRunning && !checkIfProjectsActive()){
            if(Math.abs(deltaScroll) > 60){
                animationRunning = true
                //If user scrolls down
                if(deltaScroll > 0){
                    currentSection++
                    cameraAnimation()
                    scrollTo(sectionsHTML[currentSection])

                //If user scrolls up
                }else{
                    currentSection--
                    cameraAnimation()
                    scrollTo(sectionsHTML[currentSection])
                }
            }
        }
    })



}

const cameraAnimation = () => {
    gsap.to(
        camera.position,
        {
            duration: 3,
            ease: 'power2.inOut',
            x: cameraPositions[currentSection].x,
            y: cameraPositions[currentSection].y,
            z: cameraPositions[currentSection].z,
        }
    )
}

const scrollTo = (element) => {
    gsap.to(window, {
        scrollTo: element,
        duration: 3,
        ease: "power2.out",
        onStart: () => {
            animationRunning = true
        },
        onComplete: () => {
            previousScroll = scrollY
            animationRunning = false
        }
    })
}

//Animation for nav bar 
const changeSectionInHeader = (section) => {
    if(!animationRunning && section !== currentSection){
        currentSection = section
        cameraAnimation()
        scrollTo(sectionsHTML[currentSection])
    }
}

export {scrollAnimation, changeSectionInHeader}