const setNote = (object) => {
    const setNote = JSON.stringify(object)
    localStorage.setItem('notes', setNote)
}

const getNote = () => {
    const getStringNote = localStorage.getItem('notes')
    const getNote = JSON.parse(getStringNote)
    return getNote
}

//  statment resposável pela incialização da lista de notas salvas no armazenamento local

if (localStorage.getItem('notes') === null) {
    // Item não existe no localStorage
    const notes = {
        lista: [],
    }

    const noteString = JSON.stringify(notes)
    localStorage.setItem('notes', noteString)
}

// função responsável por colapsar a div de criação de notas
const collapseNote = () => {
    noteBg.classList.toggle('bg-transparent')
    noteBg.classList.toggle('bg-black')
    noteBody.classList.toggle('right-[2rem]')
    noteBody.classList.toggle('-right-full')
}
// função responsável pela alteração de objetos ja existentes na lista de notas salvas no armazenamento local
// const editNote = (title, text) => {} (em construção)

// função chamada na criação de uma nova nota, recebendo um objeto contendo titulo e o texto da nota e "empurrando" esse objeto para uma lista no armazenamento local
const pushNewNote = (object) => {
    const LSnote = getNote()

    LSnote.lista.push(object)

    setNote(LSnote)
}

const popover = document.querySelector('.popover')

// captura o botão de criar nova nota que ao clicar envia os parametros para a função que salvara o titulo e o texxto da nota no armazenamento local
const saveBtn = document.querySelector('.saveBtn')
saveBtn.addEventListener('click', () => {
    const text_title = document.querySelector('#text-title').value
    const text_body = document.querySelector('#text-body').value

    if ((text_title === '') & (text_body !== '')) {
        alert('Por favor iclua um título para a nota')
    } else if ((text_body === '') & (text_title !== '')) {
        alert('Por favor inclua o conteúdo da nota')
    } else if ((text_title === '') & (text_body === '')) {
        alert('Nota vazia!')
    } else {
        var newNote = {
            title: text_title,
            text: text_body,
        }

        pushNewNote(newNote)

        collapseNote()

        popover.classList.add('fade-in')
        setInterval(() => {
            popover.classList.remove('fade-in')
        }, 4000)
    }
})

// colapsa a div de notas ao clicar no botão "noteBtn"
const noteBtn = document.querySelector('.noteBtn')
noteBtn.addEventListener('click', collapseNote)
// colapsa a dvi de ntoas ao clicar no X
const closeBody = document.querySelector('.closeBody')
closeBody.addEventListener('click', collapseNote)
// captura as divs de criação de notas e o background
const noteBody = document.querySelector('.noteBody')
const noteBg = document.querySelector('.noteBg')
