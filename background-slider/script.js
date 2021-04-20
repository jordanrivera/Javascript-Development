const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSilde = 0

rightBtn.addEventListener('click', () => {
    activeSilde++;
    if(activeSilde > slides.length - 1){
        activeSilde = 0
    }
    setBgToBody()
    setActiveSlide()
})


leftBtn.addEventListener('click', () => {
    activeSilde--
    if(activeSilde < 0){
        activeSilde = slides.length -1 
    }
    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.
    backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSilde].classList.add('active')
}

