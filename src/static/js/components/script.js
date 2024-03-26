const hambMenu = document.querySelector('.hambMenu')
hambMenu.addEventListener('click', collapseTopBar)

const cardBody = document.querySelectorAll('.cardBody')
const cardHeader = document.querySelectorAll('.cardHeader')
const headerSvg = document.querySelectorAll('.cardHeader svg')

cardHeader.forEach((header) => {
    header.addEventListener('click', () => {
        collpaseCard(header)
    })
})

if (localStorage.getItem('cards') === null) {
    // Item não existe no localStorage
    const cards = {
        lista: [],
    }

    const cardsString = JSON.stringify(cards)
    localStorage.setItem('cards', cardsString)
}

const search = document.querySelector('#search')
search.addEventListener('click', () => {
    indexHander(search)
})
