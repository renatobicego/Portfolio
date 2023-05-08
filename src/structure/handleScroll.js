const disableScroll = (y_coord) => {
    window.scrollTo(0, y_coord)
    window.onscroll = function() {
        window.scrollTo(0, y_coord)
    }
}
  
const enableScroll = () => {
    window.onscroll = function() {};
}

export {disableScroll, enableScroll}