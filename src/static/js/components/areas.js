const hambMenu = document.querySelector('.hambMenu')
hambMenu.addEventListener('click', collapseTopBar)

// accordion
const cardBody = document.querySelectorAll('.cardBody')
const cardHeader = document.querySelectorAll('.cardHeader')
const headerSvg = document.querySelectorAll('.cardHeader svg')

cardHeader.forEach((header) => {
    header.addEventListener('click', () => {
        collpaseCard(header)
    })
})

const infoHeader = document.querySelectorAll('.infoHeader')
infoHeader.forEach((element) => {
    element.addEventListener('click', () => {
        var headerSibling = element.nextElementSibling
        var headerParent = element.parentElement
        var headerSVG = element.querySelector('svg')
        headerSVG.classList.toggle('rotate-180')
        headerSibling.classList.toggle('max-h-0')
        headerSibling.classList.toggle('max-h-[80dvh]')
        headerParent.classList.toggle('absolute')
        headerParent.classList.toggle('bottom-0')
    })
    var text = document.querySelector('.text')
    text.classList.toggle('py-8')
})

var vizualizationBtn = document.querySelectorAll('.vz')

vizualizationBtn.forEach((element) => {
    element.addEventListener('click', () => {
        carouselHandler(element.id, 'corazion')
    })
})
