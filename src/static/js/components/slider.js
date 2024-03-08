const sliderCollapse = () => {
    slider.classList.toggle('-right-full')
    body.classList.toggle('overflow-visible')
    body.classList.toggle('overflow-hidden')
}
const slideBtn = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
const body = document.querySelector('body')

slideBtn.forEach((element) => {
    element.addEventListener('click', sliderCollapse)
})

const sliderClose = document.querySelector('.sliderClose')

sliderClose.addEventListener('click', sliderCollapse)
