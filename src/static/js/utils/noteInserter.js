const noteInserter = () => {
    const savedNotes = document.querySelector('.savedNotes')
    savedNotes.innerHTML = ''

    const noteString = localStorage.getItem('notes')
    const LSnote = JSON.parse(noteString)

    LSnote.lista.forEach((element) => {
        const newNote = `
            <div class="noteCard">
                <div
                    class="h-full gap-0 overflow-hidden max-h-[6rem] rounded-3xl border border-blue-900 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-md  focus:max-h-[100rem] line-clamp-1 whitespace-nowrap px-[2rem]"
                >
                    <p
                        class="noteTitle poppins-regular flex h-full max-h-[6rem] items-center  text-[2.2rem] leading-10 line-clamp-2 text-nowrap text-ellipsis over"
                    >${element.title}</p>
                    <p
                        class="noteText line-clamp-[8] text-justify text-[1.5rem] mx-[2rem] mb-[2rem] overflow-hidden"
                    >${element.text}</p>
                </div>
            </div>
            `
        savedNotes.insertAdjacentHTML('beforeend', newNote)
    })
    noteEventHandler()
}

window.addEventListener('load', () => {
    noteInserter()
})
