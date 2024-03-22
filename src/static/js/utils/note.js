const noteBody = document.querySelector('.noteBody')
const noteBg = document.querySelector('.noteBg')

// Função responsável por colapsar a div de notas
const collapseNote = () => {
    noteBg.classList.toggle('bg-transparent')
    noteBg.classList.toggle('bg-black')
    noteBody.classList.toggle('right-[2rem]')
    noteBody.classList.toggle('-right-full')
}
// Objeto que armazena as notas
const notes = {
    lista: [],
}
//  Função responsável por inserir as notas no objeto "notes"
const noteHandler = (title, text) => {
    var object = {
        title: title,
        text: text,
    }

    notes.lista.push(object)
    console.log(notes)

    const noteString = JSON.stringify(notes)
    localStorage.setItem('notes', noteString)
}
