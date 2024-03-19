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

const noteBtn = document.querySelector('.noteBtn')
noteBtn.addEventListener('click', collapseNote)

const closeBody = document.querySelector('.closeBody')
closeBody.addEventListener('click', collapseNote)

const saveBtn = document.querySelector('.saveBtn')
saveBtn.addEventListener('click', () => {
    const text_title = document.querySelector('#text-title')
    const text_body = document.querySelector('#text-body')
    noteHandler(text_title.value, text_body.value)
    collapseNote()
})
