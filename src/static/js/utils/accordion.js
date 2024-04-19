const collpaseCard = (header) => {
    header.nextElementSibling.classList.toggle('max-h-[999rem]')
    header.nextElementSibling.classList.toggle('max-h-0')

    const clickedSvg = header.querySelector('svg')
    clickedSvg.classList.toggle('rotate-180')
}
