const selectedList = []

const listLoader = (tipo, nome) => {
    switch (tipo) {
        case 'Veias':
            data.forEach((element) => {
                if (element.tipo === tipo) {
                    element.lista.forEach((element) => {
                        if (element.nome === nome) {
                            element.tipos.forEach((element) => {
                                selectedList.push(element)
                            })
                        }
                    })
                }
            })
        case 'Ossos':
            data.forEach((element) => {
                if (element.tipo === tipo) {
                    element.lista.forEach((element) => {
                        if (element.nome === nome) {
                            element.tipos.forEach((element) => {
                                selectedList.push(element)
                            })
                        }
                    })
                }
            })
        case 'Músculos':
            data.forEach((element) => {
                if (element.tipo === tipo) {
                    element.lista.forEach((element) => {
                        if (element.nome === nome) {
                            element.tipos.forEach((element) => {
                                selectedList.push(element)
                            })
                        }
                    })
                }
            })
    }
    const selectedListString = JSON.stringify(selectedList)

    localStorage.setItem('selectedList', selectedListString)
}

const cardBtn = document.querySelectorAll('.cardBtn')

cardBtn.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const tipo = buttons.getAttribute('data-tipo')
        const nome = buttons.getAttribute('data-nome')
        listLoader(tipo, nome)
    })
})
