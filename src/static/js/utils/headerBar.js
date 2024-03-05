const collapsiveArrow = document.querySelectorAll('.cardRow')

collapsiveArrow.forEach((collapsiveArrow) => {
    const arrow = collapsiveArrow.querySelector('.cardHeader svg')
    collapsiveArrow.addEventListener('click', () => {
        arrow.classList.toggle('rotate-180')
    })
})

const collapseTopBar = () => {
    const headerBar = document.querySelector('.headerBar')
    headerBar.classList.toggle('top-headerSize')
}

const hambMenu = document.querySelector('.hambMenu')
hambMenu.addEventListener('click', collapseTopBar)
