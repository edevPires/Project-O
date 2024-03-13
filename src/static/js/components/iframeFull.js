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
            alert('click')
            const screen = fullscreen.parentNode

            if (screen.classList.contains('relative')) {
                // caso a tela possua a classe "full" isso indica que a mesma ja se encontra no fullscreen então ocorre apenas a reversão
                screen.classList.remove('relative')
                screen.classList.add('fixed')
                screen.classList.add('top-0')
                screen.classList.add('left-0')
                screen.classList.add('w-screen')
                screen.classList.add('h-screen')
                screen.classList.add('z-30')
            } else {
                screen.classList.add('relative')
                screen.classList.remove('fixed')
                screen.classList.remove('top-0')
                screen.classList.remove('left-0')
                screen.classList.remove('w-screen')
                screen.classList.remove('h-screen')
                screen.classList.remove('z-30')
            }
        })
    })
}
