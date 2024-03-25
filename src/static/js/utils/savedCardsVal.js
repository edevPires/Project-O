const savedCardsVal = (nome) => {
    const setCards = (object) => {
        const setCards = JSON.stringify(object)
        localStorage.setItem('cards', setCards)
    }

    const getCards = () => {
        const getStringCards = localStorage.getItem('cards')
        const getCards = JSON.parse(getStringCards)
        return getCards
    }

    const savedCards = getCards()

    let found = false
    for (const savedCard of savedCards.lista) {
        if (nome === savedCard.nome) {
            found = true
            break // Exit the loop early since we found a match
        }
    }

    setCards(savedCards)
    return found
}
