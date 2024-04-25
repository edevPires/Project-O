var carouselWrapper = () => {
    var carousel = document.querySelector('.carouselSlider')
    carousel.classList.toggle('flex')
    carousel.classList.toggle('hidden')
    carousel.classList.toggle('scale-0')
    carousel.classList.toggle('scale-100')
}

carouselLoader = (object) => {
    var carouselBody = document.querySelector('.swiper-wrapper')
    var infoText = document.querySelector('.text')
    infoText.textContent = object.info
    object.linksList.forEach((element) => {
        var swiperSlider = `<div class="swiper-slide relative flex flex-col">
                            <div
                                class="carouselHeader poppins-medium absolute top-0 flex w-full items-center justify-center rounded-bl-2xl rounded-br-2xl bg-opacity-50 bg-gradient-to-b from-black p-2 text-[3rem] text-white"
                            >
                                <h1>${element.pantalla}</h1>
                            </div>
                            <iframe
                                src="${element.link}"
                                frameborder="0"
                                class="h-full w-full"
                            ></iframe>
                            <!-- absolute bottom-0 -->
                        </div>`
        carouselBody.insertAdjacentHTML('afterbegin', swiperSlider)
    })
}

var dataSearch = (id, type) => {
    switch (type) {
        case 'corazion':
            corazion.forEach((element) => {
                element.lista.forEach((element) => {
                    element.lista.forEach((element) => {
                        if (element.id === id) {
                            var linkList = []
                            element.listaLinks.forEach((element) => {
                                var links = {
                                    pantalla: element.pantalla,
                                    link: element.link,
                                }
                                linkList.push(links)
                            })
                            var object = {
                                condicao: element.condicao,
                                info: element.info,
                                linksList: linkList,
                            }
                            carouselLoader(object)
                            return true
                        }
                    })
                })
            })
            break
    }
}

const carouselHandler = (id, type) => {
    const data = dataSearch(id, type)
    carouselWrapper()
}
