const loadFsBtns = () => {
    // select do botão fullscreen
    const fullscreen = document.querySelectorAll('.fullscreen')
    // select do body
    const body = document.querySelector('body')

    // select de todos os botões fullscreen do documento
    fullscreen.forEach((fullscreen) => {
        // evento de click nos botões
        fullscreen.addEventListener('click', () => {
            // select das divs pai de cada botão select (no caso são as telas)
            const screen = fullscreen.parentNode

            if (screen.requestFullscreen) {
                screen.requestFullscreen()
            } else if (screen.mozRequestFullScreen) {
                /* Firefox */
                screen.mozRequestFullScreen()
            } else if (screen.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                screen.webkitRequestFullscreen()
            } else if (screen.msRequestFullscreen) {
                /* IE/Edge */
                screen.msRequestFullscreen()
            }

            if (
                document.fullscreenElement ||
                document.mozFullScreen ||
                document.webkitIsFullScreen ||
                document.msFullscreenElement
            ) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    /* Firefox */
                    document.mozCancelFullScreen()
                } else if (document.webkitExitFullscreen) {
                    /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen()
                } else if (document.msExitFullscreen) {
                    /* IE/Edge */
                    document.msExitFullscreen()
                }
            }
        })
    })
}
