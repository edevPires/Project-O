const sidebarAccordion = (element) => {
    const leftBar = document.querySelector('.left-bar')
    console.log(element.id)
    if (element.id === 'books') {
        const list = document.querySelector('#books-list')
        list.classList.toggle('max-h-[999rem]')
    } else if (element.id === 'articles') {
        const list = document.querySelector('#articles-list')
        list.classList.toggle('max-h-[999rem]')
    } else if (element.id === 'periodics') {
        const list = document.querySelector('#periodics-list')
        list.classList.toggle('max-h-[999rem]')
    }
    if (leftBar.classList.contains('w-[6rem]')) {
        leftBar.classList.remove('w-[6rem]')
        leftBar.classList.add('w-[25rem]')
    }
}

const handleResize = () => {
    const leftBar = document.querySelector('.left-bar')
    var outerWidth = window.outerWidth
    console.log(outerWidth)

    if (outerWidth <= 640) {
        const libLists = document.querySelectorAll('.lib-list')
        libLists.forEach((element) => {
            element.classList.remove('max-h-[999rem]')
            element.classList.add('max-h-0')
        })
        leftBar.classList.remove('w-[25rem]')
        leftBar.classList.add('w-[6rem]')
    }
}
window.addEventListener('resize', handleResize)
