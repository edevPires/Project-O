// target na NP
const fcsNt = document.querySelector('.fcsNt')
// armazena o valor do titulo da NP
const fcsNtTitle = document.querySelector('#fc-title')
// armazena o valor do texto da NP
const fcsNtText = document.querySelector('#fc-text')
// target do background que escurece ao clicar em uma NM
const fcsNtBg = document.querySelector('.fcsNtBg')
// target do botão "salvar"
const fcsNtSave = document.querySelector('#fcsNtSave')
// target botão "sair"
const fcsNtClose = document.querySelector('#fcsNtClose')
// target do botão "editar"
const fcsNtEdit = document.querySelector('#fcsNtEdit')

const fcsNtDel = document.querySelector('#fcsNtDel')

// armazena o valor do título da nota clicada antes de qualquer possível alteração
var oldTitle = fcsNtTitle.value
// armazena o valor do texto da nota clicada antes de qualquer possível alteração
var oldText = fcsNtText.value

// função resposável por salvar o objeto fornecido como parametro para o item "notes"
const setNote = (object) => {
    const setNote = JSON.stringify(object)
    localStorage.setItem('notes', setNote)
}

// função responsável por resgatar o conteúdo do item "notes"
const getNote = () => {
    const getStringNote = localStorage.getItem('notes')
    const getNote = JSON.parse(getStringNote)
    return getNote
}

// função responsável por alterar o valor dos títulos e textos originais conferme a NM clicada
const orgVals = () => {
    oldTitle = fcsNtTitle.value
    oldText = fcsNtText.value
}

// função responsável por identificar e substituir a nota no item "notes" (apenas acessada após alguma alteração na nota)
const rewriteLsNt = () => {
    // comparação de segurança para certificar que a anotação alterada não possui os mesmos valores que a anotação original
    if (fcsNtTitle.value !== oldTitle || fcsNtText.value !== oldText) {
        const lsNotes = getNote()

        lsNotes.lista.forEach((element) => {
            if (element.title === oldTitle) {
                element.title = fcsNtTitle.value
                element.text = fcsNtText.value
            }
        })
        setNote(lsNotes)
        showHiddenNote()
        noteInserter()
    } else {
        alert('Erro, operação bloqueada!')
    }
}

// função responsável por configurar o botão "editar"
const editFcsNt = (btn) => {
    // if statment que possibilita a alteração da nota apenas se o o botão "editar" for clicado
    if (
        fcsNtTitle.hasAttribute('readonly') & fcsNtText.hasAttribute('readonly')
    ) {
        fcsNtTitle.removeAttribute('readonly')
        fcsNtText.removeAttribute('readonly')
        btn.classList.remove('bg-white')
        btn.classList.remove('text-blue-900')
        btn.classList.add('bg-blue-900')
        btn.classList.add('text-white')

        orgVals()

        // função responsável por validar que as alterações na nota sigam as seguintes restrições:
        // o titulo ou o texto da NP precisam ser diferente dos originais
        // nem o titulo e nem o texto podem ser salvos com uma string vazia
        // Caso as restrições sejam cumpridas o botão "save será liberado"
        const validator = () => {
            console.log(fcsNtTitle.value)
            if (
                (fcsNtTitle.value === oldTitle) &
                    (fcsNtText.value === oldText) ||
                fcsNtText.value === '' ||
                fcsNtTitle.value === ''
            ) {
                fcsNtSave.classList.remove('hover:cursor-pointer')
                fcsNtSave.classList.add('opacity-60')
                fcsNtSave.classList.add('hover:cursor-not-allowed')
                fcsNtSave.classList.add('pointer-events-none')
            } else {
                fcsNtSave.classList.remove('opacity-60')
                fcsNtSave.classList.remove('hover:cursor-not-allowed')
                fcsNtSave.classList.remove('pointer-events-none')
                fcsNtSave.classList.add('hover:cursor-pointer')

                fcsNtSave.removeEventListener('click', () => {
                    alert('sexo')
                })
            }
        }

        // listeners responsáveis por chamar a função validator() a qual fara as comparações e verificações de restrição necessárias a cada tecla pressionada (com um intervalo de 300ms)
        fcsNtTitle.addEventListener('keydown', () => {
            fcsNtText.removeEventListener
            setTimeout(() => {
                validator()
            }, 300)
        })
        fcsNtText.addEventListener('keydown', () => {
            setTimeout(() => {
                validator()
            }, 300)
        })
    } else {
        fcsNtTitle.setAttribute('readonly', 'true')
        fcsNtText.setAttribute('readonly', 'true')
        btn.classList.add('bg-white')
        btn.classList.remove('bg-blue-900')
        btn.classList.remove('text-white')
    }
}

// função que garante o correto funcionamento dos elementos que devem aparecer ao clicar em uma nota os seguintes items irão chamar essa função, o botão "sair", o botão "salvar" e o click em qualquer area do background em volta da NP
const showHiddenNote = () => {
    fcsNtBg.classList.toggle('bg-transparent')
    fcsNtBg.classList.toggle('bg-black')
    fcsNtBg.classList.toggle('pointer-events-none')

    fcsNt.classList.toggle('scale-0')
    fcsNt.classList.toggle('scale-100')
    fcsNt.classList.toggle('opacity-0')
}

const delFcsNt = () => {
    const lsNotes = getNote()

    // Filtrar a lista para excluir o elemento com o mesmo título que oldTitle
    lsNotes.lista = lsNotes.lista.filter(
        (element) => element.title !== oldTitle
    )

    // Atualizar as notas
    console.log(lsNotes)
    setNote(lsNotes)
    showHiddenNote()
    noteInserter()
}
// Função responsável por inserir os valores da NM clicada na NP
const fcsNoteIsrt = (noteTitle, noteText) => {
    fcsNtTitle.value = noteTitle
    fcsNtText.value = noteText
    oldTitle = noteTitle
}
// função principal das notas
const noteEventHandler = () => {
    // Essa função tme como função resetar as configurações da NP sempre que um click ocorrer em uma NM, para evitar interferências com as notas anteriores
    const resetNtState = () => {
        fcsNtEdit.classList.add('bg-white')
        fcsNtEdit.classList.remove('bg-blue-900')
        fcsNtEdit.classList.remove('text-white')

        fcsNtTitle.setAttribute('readonly', 'true')
        fcsNtText.setAttribute('readonly', 'true')

        fcsNtSave.classList.remove('hover:cursor-pointer')
        fcsNtSave.classList.add('opacity-60')
        fcsNtSave.classList.add('hover:cursor-not-allowed')
        fcsNtSave.classList.add('pointer-events-none')
    }
    // Função responsável por adicionar as funções necessárias para o correto funcionamento de cada NM inserida na página
    const noteCard = document.querySelectorAll('.noteCard')
    noteCard.forEach((element) => {
        element.addEventListener('click', () => {
            const focusNoteTitle = element.querySelector('.noteTitle')
            const focusNoteText = element.querySelector('.noteText')
            fcsNoteIsrt(focusNoteTitle.textContent, focusNoteText.textContent)
            resetNtState()
            showHiddenNote()
        })
    })
}

// secção dos Event listener constantes, que não sofrerão alterações ao decorrer do uso da página

fcsNtDel.addEventListener('click', delFcsNt)

// listener de click do botão "sair" (fecha a NP)
fcsNtClose.addEventListener('click', showHiddenNote)

// listener de click do background escurecido atrás da NM (fecha a NP)
fcsNtBg.addEventListener('click', showHiddenNote)

// listener de click que aciona a função editFcsNt (Edit Focus Note), a qual é responsável por configurar as funcionalidades de edição
fcsNtEdit.addEventListener('click', () => {
    editFcsNt(fcsNtEdit)
})

// listener de click que aciona a função rewriteLsNt (Rewrite Localsave Note), a qual é responsável por reescrever as alterações feitas em uma anotação e salva-la novamente no armazenamento local
fcsNtSave.addEventListener('click', () => {
    rewriteLsNt()
})

// Legenda:
// NM = Notas menores (as notas menores são aquelas as quais os tótulos são carregados na pagina)
// NP = Nota principal (a nota principal aparece ao clicar em uma das NM, mostrando seus valores completos)
// notes = notes é o item salvo no armazenamento local e nele é contido as notas salvas e editadas pelo usuário
// titlos e textos originais = o titulo e texto original nada mais são q os valores originais antes de qualquer edição...ser feita na nota, para fins de comparação
