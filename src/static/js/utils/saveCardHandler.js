const saveCardHandler = (nome, tipo, textEl, svgEl) => {
    const setCards = (object) => {
        const setCards = JSON.stringify(object)
        localStorage.setItem('cards', setCards)
    }

    const getCards = () => {
        const getStringCards = localStorage.getItem('cards')
        const getCards = JSON.parse(getStringCards)
        return getCards || { lista: [] } // Return an empty object with lista array if cards are not found
    }

    const savedCards = getCards()

    if (!savedCards.lista) {
        savedCards.lista = []
    }

    let found = false
    for (const savedCard of savedCards.lista) {
        if (nome === savedCard.nome) {
            found = true
            break
        } else {
        }
    }

    if (!found) {
        const newSavedCard = {
            tipo: tipo,
            nome: nome,
        }
        savedCards.lista.push(newSavedCard)
        console.log(savedCards)
        console.log(newSavedCard)
        svgEl.classList.add('fill-white')
        textEl.parentNode.classList.add('bg-blue-900')
        textEl.classList.add('text-white')
        textEl.textContent = 'salvo'

        setCards(savedCards)
        return false
    } else {
        savedCards.lista = savedCards.lista.filter(
            (element) => element.nome !== nome
        )

        svgEl.classList.remove('fill-white')
        textEl.parentNode.classList.remove('bg-blue-900')
        textEl.classList.remove('text-white')
        textEl.textContent = 'salvar'

        setCards(savedCards)
        return true
    }
}
