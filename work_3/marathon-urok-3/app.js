const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')

const mainslide = document.querySelector('.main-slide')
const slideCount = mainslide.querySelectorAll('div').length

const container = document.querySelector('.container')

let activeSlide = 0


sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click',()=> {
    changeSlide('up')
})

downBtn.addEventListener('click',()=> {
    changeSlide('dw')    
})

function changeSlide(dir){
    if (dir === 'up') {
        activeSlide++
        if (activeSlide === slideCount){
            activeSlide = 0
        }
    } else if (dir === 'dw'){
        activeSlide--
        if (activeSlide < 0){
            activeSlide = slideCount - 1
        }
        
    }

    const h = container.clientHeight

    mainslide.style.transform = `translateY(-${activeSlide * h}px)`
    sidebar.style.transform = `translateY(${activeSlide * h}px)`

}
