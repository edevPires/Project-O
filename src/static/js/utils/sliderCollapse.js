const sliderCollapse = () => {
    slider.classList.toggle('transition-all')
    slider.classList.toggle('translate-y-full')
    slider.classList.toggle('scale-0')
    slider.classList.toggle('opacity-50')
    body.classList.toggle('overflow-visible')
    body.classList.toggle('overflow-hidden')
    setTimeout(() => {
        slider.classList.toggle('transition-all')
    }, 300)
}
