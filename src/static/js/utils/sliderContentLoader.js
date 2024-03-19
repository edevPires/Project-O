const sliderPicker = (telaCentral, tela2, tela3) => {
    var sliderContent = ``
    switch (selectedType) {
        case 'Ossos':
            sliderContent = `
            <div
                class="top flex h-full w-full flex-col flex-wrap sm:flex-row sm:flex-nowrap"
            >
                <div
                    class="tela-central h-1/3 w-full flex-grow-0 rounded-2xl p-6 sm:h-full sm:w-[60%] sm:pr-0"
                >
                    <div
                        class="relContainer relative size-full rounded-2xl shadow-lg shadow-slate-500"
                    >
                        <iframe
                            src="${telaCentral}"
                            frameborder="0"
                            class="size-full rounded-2xl"
                        ></iframe>
                        <div
                            class="fullscreen absolute bottom-0 right-0 size-[4.2rem] rounded-2xl bg-transparent hover:cursor-pointer"
                        ></div>
                    </div>
                </div>
                <div class="tela23 flex flex-grow flex-col flex-wrap">
                    <div
                        class="tela-2 flex-grow rounded-2xl p-6 pb-0 sm:w-full"
                    >
                        <div
                            class="relContainer relative size-full rounded-2xl shadow-lg shadow-slate-500"
                        >
                            <iframe
                                src="${tela2}"
                                frameborder="0"
                                class="size-full rounded-2xl"
                            ></iframe>
                            <div
                                class="fullscreen absolute bottom-0 right-0 size-[4.2rem] rounded-2xl bg-transparent hover:cursor-pointer"
                            ></div>
                        </div>
                    </div>
                    <div
                        class="tela-3 flex flex-grow flex-col flex-wrap rounded-2xl p-6"
                    >
                        <div
                            class="relContainer relative size-full rounded-2xl shadow-lg shadow-slate-50"
                        >
                            <iframe
                                src="${tela3}"
                                frameborder="0"
                                class="size-full rounded-2xl"
                            ></iframe>
                            <div
                                class="fullscreen absolute bottom-0 right-0 size-[4.2rem] rounded-2xl bg-transparent hover:cursor-pointer"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            `
            break
        default:
            sliderContent = `
            <div class="top flex h-full w-full">
                <div class="tela-central shad h-full w-full rounded-2xl p-6">
                    <div
                        class="relContainer relative size-full rounded-2xl shadow-lg shadow-slate-500"
                    >
                        <iframe
                            src="${telaCentral}"
                            frameborder="0"
                            class="size-full rounded-2xl"
                        >
                        </iframe>
                        <div
                            class="fullscreen absolute bottom-0 right-0 size-[4.2rem] bg-transparent hover:cursor-pointer"
                        ></div>
                    </div>
                </div>
            </div>`
    }

    const sliderDiv = document.querySelector('.test')
    sliderDiv.innerHTML = ''
    sliderDiv.insertAdjacentHTML('afterbegin', sliderContent)
    loadFsBtns()
}

const iframeLoader = (dataName) => {
    iframeLinks.forEach((element) => {
        if (element.nome === dataName) {
            telaCentral = element.telaCentral
            tela2 = element.tela2
            tela3 = element.tela3
            sliderPicker(telaCentral, tela2, tela3)
        }
    })
}
