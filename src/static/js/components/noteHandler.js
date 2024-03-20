if (localStorage.getItem('notes') !== null) {
    // Item já existe no localStorage
    alert('O item já existe no localStorage.')
} else {
    // Item não existe no localStorage
    alert('O item não existe no localStorage.')

    const notes = {
        lista: [],
    }

    const noteString = JSON.stringify(notes)
    localStorage.setItem('notes', noteString)
}

const collapseNote = () => {
    noteBg.classList.toggle('bg-transparent')
    noteBg.classList.toggle('bg-black')
    noteBody.classList.toggle('right-[2rem]')
    noteBody.classList.toggle('-right-full')
}

const saveBtn = document.querySelector('.saveBtn')
saveBtn.addEventListener('click', () => {
    const noteString = localStorage.getItem('notes')
    const LSnote = JSON.parse(noteString)

    const text_title = document.querySelector('#text-title').value
    const text_body = document.querySelector('#text-body').value

    var newNote = {
        title: text_title,
        text: text_body,
    }

    LSnote.lista.push(newNote)

    const newNoteAdded = JSON.stringify(LSnote)
    localStorage.setItem('notes', newNoteAdded)

    collapseNote()
})

const noteBtn = document.querySelector('.noteBtn')
noteBtn.addEventListener('click', collapseNote)

const closeBody = document.querySelector('.closeBody')
closeBody.addEventListener('click', collapseNote)

const noteBody = document.querySelector('.noteBody')
const noteBg = document.querySelector('.noteBg')
