const noteInserter = () => {
    const noteString = localStorage.getItem('notes')
    const LSnote = JSON.parse(noteString)

    console.log(LSnote)

    LSnote.lista.forEach((element) => {
        const savedNotes = document.querySelector('.savedNotes')

        const newNote = `
                <div
                    class="noteCard h-full gap-0 overflow-hidden max-h-[6rem] rounded-3xl border border-blue-900 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-md  hover:max-h-[100rem]"
                >
                    <h4
                        class="noteTitle poppins-regular flex h-[6rem] items-center px-[2rem] text-[2.2rem] leading-10"
                    >
                        ${element.title}
                    </h4>
                    <p
                        class="noteText line-clamp-[8] text-justify text-[1.5rem] mx-[2rem] mb-[2rem] overflow-hidden"
                    >
                        ${element.text}
                    </p>
                </div>
            `
        savedNotes.insertAdjacentHTML('beforeend', newNote)
    })
}

window.addEventListener('load', () => {
    noteInserter()
})
