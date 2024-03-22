const savedNotes = document.querySelector('.savedNotes')

const noteString = localStorage.getItem('notes')
const notes = JSON.parse(noteString)

notes.lista.forEach((element) => {
    const newNote = `
            <div
                class="noteCard m-[2rem] h-fit min-h-[25rem] max-h-[25rem] w-full rounded-3xl border border-blue-900 p-[2rem] transition-all duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-lg lg:min-w-[25rem] lg:max-w-[25rem] lg:flex-grow"
            >
                <h4
                    class="noteTitle poppins-regular mb-[1rem] text-[2.8rem] leading-10"
                >
                    ${element.title}
                </h4>
                <p
                    class="noteText line-clamp-[8] text-justify text-[1.5rem]"
                >
                    ${element.text}
                </p>
            </div>
        `
    savedNotes.insertAdjacentHTML('beforeend', newNote)
})

const noteDivHeader = document.querySelector('.savedNotesHeader')
noteDivHeader.addEventListener('click', () => {
    const svg = document.querySelector('.savedNotesHeader svg')

    svg.classList.toggle('rotate-180')
    savedNotes.classList.toggle('max-h-[7.5rem]')
    savedNotes.classList.toggle('max-h-[999rem]')
})
