const divElements = document.querySelectorAll('.dataIndex')

const indexHander = (search) => {
    search.addEventListener('keyup', () => {
        console.log('uepa')
        let typedInput = document
            .querySelector('#search')
            .value.toLowerCase()
            .trim()
        divElements.forEach((element) => {
            const dataIndexValue = element.getAttribute('data-index')
            console.log(dataIndexValue)
            if (!dataIndexValue.includes(typedInput)) {
                console.log(dataIndexValue)
                element.classList.add('hidden')
            } else if (dataIndexValue.includes(typedInput)) {
                element.classList.remove('hidden')
            } else if (typedInput === '') {
                divElements.forEach((element) => {
                    element.classList.remove('hidden')
                })
            }
        })
    })
}
