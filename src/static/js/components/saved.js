const showHiddenNote = () => {
    const fcsNtBg = document.querySelector('.fcsNtBg')
    fcsNtBg.classList.toggle('bg-transparent')
    fcsNtBg.classList.toggle('bg-black')
    fcsNtBg.classList.toggle('pointer-events-none')

    fcsNtBg.addEventListener('click', showHiddenNote)

    const fcsNt = document.querySelector('.fcsNt')
    fcsNt.classList.toggle('scale-0')
    fcsNt.classList.toggle('scale-100')
    fcsNt.classList.toggle('opacity-0')
}

const fcsNoteIsrt = (noteTitle, noteText) => {
    const fcsNtTitle = document.querySelector('#fc-title')
    const fcsNtText = document.querySelector('#fc-text')
    fcsNtTitle.value = noteTitle
    fcsNtText.value = noteText
}

const noteEventHandler = () => {
    const noteCard = document.querySelectorAll('.noteCard')
    noteCard.forEach((element) => {
        element.addEventListener('click', () => {
            const focusNoteTitle = element.querySelector('.noteTitle')
            const focusNoteText = element.querySelector('.noteText')
            fcsNoteIsrt(focusNoteTitle.textContent, focusNoteText.textContent)
            showHiddenNote()
        })
    })
    const fcsNtEdit = document.querySelector('#fcsNtEdit')
    fcsNtEdit.addEventListener('click', () => {
        alert('Em construção')
    })
    const fcsNtClose = document.querySelector('#fcsNtClose')
    fcsNtClose.addEventListener('click', showHiddenNote)
}
