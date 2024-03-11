const collapseTopBar = () => {
    const headerBar = document.querySelector('.headerBar')
    headerBar.classList.toggle('top-0')
    headerBar.classList.toggle('top-[10rem]')
}

const hambMenu = document.querySelector('.hambMenu')
hambMenu.addEventListener('click', collapseTopBar)
