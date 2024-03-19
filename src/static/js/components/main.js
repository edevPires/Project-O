// row's inserter
const selectedListString = localStorage.getItem('selectedList')
const selectedList = JSON.parse(selectedListString)

const selectedNameString = localStorage.getItem('nome')
const selectedName = JSON.parse(selectedNameString)

const selectedTypeString = localStorage.getItem('tipo')
const selectedType = JSON.parse(selectedTypeString)

moduleInserter(selectedList, selectedName, selectedType)

// slider slide function

const slideBtn = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
const body = document.querySelector('body')

slideBtn.forEach((element) => {
    element.addEventListener('click', sliderCollapse)
})

const sliderClose = document.querySelector('.sliderClose')
sliderClose.addEventListener('click', sliderCollapse)

// slider content loader

const clickedDiv = document.querySelectorAll('.slide')

clickedDiv.forEach((element) => {
    element.addEventListener('click', () => {
        const dataAtribute = element.getAttribute('data-nome')
        iframeLoader(dataAtribute)
    })
})

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

const noteBtn = document.querySelector('noteBtn')
noteBtn = addEventListener('click', () => {})
