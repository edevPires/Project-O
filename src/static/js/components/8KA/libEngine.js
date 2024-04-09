const PDFElement = document.getElementById('PDFViewer')

const books = document.querySelectorAll('.book')
books.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('book')) {
            PDFLoader(element, 'book', PDFViewer)
        } else if (element.classList.contains('article')) {
            PDFLoader(element, 'article', PDFViewer)
        } else if (element.classList.contains('periodic')) {
            PDFLoader(element, 'periodic', PDFViewer)
        }
    })
})

document.addEventListener('keydown', (event) => {
    if ((event.key === 'Escape') & !PDFElement.classList.contains('hidden')) {
        PDFViewerHandler()
    }
})
