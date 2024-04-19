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
