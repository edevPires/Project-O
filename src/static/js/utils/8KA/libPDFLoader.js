const PDFViewerHandler = () => {
    const PDFElement = document.getElementById('PDFViewer')
    PDFElement.classList.toggle('hidden')
}

const PDFPathInserter = (src, element) => {
    element.setAttribute('src', src)
}

const PDFModuleFinder = (title, type) => {
    if (type === 'book') {
        for (const element of library.livro) {
            if (element.nome === title) {
                const src = element.path
                return src
            }
        }
    }
}

const getTitle = (element) => {
    return element.querySelector('h1').textContent.trim()
}

// main function

const PDFLoader = (element, type, pdfViewer) => {
    const title = getTitle(element)
    const path = PDFModuleFinder(title, type)
    PDFPathInserter(path, pdfViewer)
    PDFViewerHandler()
}
