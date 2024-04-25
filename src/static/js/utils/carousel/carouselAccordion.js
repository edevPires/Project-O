const carouselAccordion = () => {
    const infoHeader = document.querySelectorAll('.infoHeader')
    infoHeader.forEach((element) => {
        element.addEventListener('click', () => {
            var headerSibling = element.nextElementSibling
            var headerParent = element.parentElement
            var headerSVG = element.querySelector('svg')
            headerSVG.classList.toggle('rotate-180')
            console.log(headerParent)
            headerParent.classList.toggle('absolute')
            headerParent.classList.toggle('bottom-0')
            headerSibling.classList.toggle('max-h-0')
            headerSibling.classList.toggle('max-h-[80dvh]')
        })
    })
}
