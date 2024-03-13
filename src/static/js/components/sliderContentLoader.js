const sliderPicker = (telaCentral, tela2, tela3) => {
    if (selectedType === 'Ossos') {
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
                    class="tela-2 flex-grow rounded-2xl p-6 pb-0 sm:h-[50%] sm:w-full"
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
    } else {
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
</div>
        `
    }

    console.log(sliderContent)

    const sliderDiv = document.querySelector('.sliderContent')
    sliderDiv.insertAdjacentHTML('afterbegin', sliderContent)

    loadFsBtns()
}

const iframeLoader = (dataName) => {
    if (selectedType === 'Ossos') {
        iframeLinks.forEach((element) => {
            if (element.nome === dataName) {
                telaCentral = element.telaCentral
                tela2 = element.tela2
                tela3 = element.tela3
                console.log(dataName)
                console.log(telaCentral)
                console.log(tela2)
                console.log(tela3)
                sliderPicker(telaCentral, tela2, tela3)
            }
        })
    } else {
        iframeLinks.forEach((element) => {
            if (element.nome === dataName) {
                telaCentral = element.telaCentral
                console.log(dataName)
                console.log(telaCentral)
                sliderPicker(telaCentral, tela2, tela3)
            }
        })
    }
}
var telaCentral = ''
var tela2 = ''
var tela3 = ''

var sliderContent = ``

const clickedDiv = document.querySelectorAll('.slide')

clickedDiv.forEach((element) => {
    element.addEventListener('click', () => {
        const dataAtribute = element.getAttribute('data-nome')
        iframeLoader(dataAtribute)
    })
})
