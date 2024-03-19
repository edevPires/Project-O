const collpaseCard = (header) => {
    header.parentNode.classList.toggle('shadow-md')
    header.nextElementSibling.classList.toggle('max-h-[1000px]')
    header.nextElementSibling.classList.toggle('max-h-0')

    const clickedSvg = header.querySelector('svg')
    clickedSvg.classList.toggle('rotate-180')
}
