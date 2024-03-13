const collpaseCard = (header) => {
    cardBody.forEach((body) => {
        if (body.classList.contains('max-h-[999rem]')) {
            body.parentNode.classList.remove('shadow-md')
            body.classList.remove('max-h-[999rem]')
            body.classList.add('max-h-0')
        }
    })

    headerSvg.forEach((svg) => {
        if (svg.classList.contains('rotate-180')) {
            svg.classList.remove('rotate-180')
        }
    })
    setTimeout(() => {
        const clickedSvg = header.querySelector('svg')
        clickedSvg.classList.add('rotate-180')

        header.parentNode.classList.add('shadow-md')
        header.nextElementSibling.classList.add('max-h-[999rem]')
        header.nextElementSibling.classList.remove('max-h-0')
    }, 300)
}

const cardBody = document.querySelectorAll('.cardBody')
const cardHeader = document.querySelectorAll('.cardHeader')
const headerSvg = document.querySelectorAll('.cardHeader svg')

cardHeader.forEach((header) => {
    header.addEventListener('click', () => {
        collpaseCard(header, header.firstChild)
    })
})
