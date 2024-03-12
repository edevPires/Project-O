const selectedListString = localStorage.getItem('selectedList')
const selectedList = JSON.parse(selectedListString)

const selectedNameString = localStorage.getItem('nome')
const selectedName = JSON.parse(selectedNameString)

const selectedTypeString = localStorage.getItem('tipo')
const selectedType = JSON.parse(selectedTypeString)

const textColorPicker = () => {
    if (selectedType === 'Veias') {
        return '-red'
    } else if (selectedType === 'Ossos') {
        return '-gray'
    }
}

var textColor = textColorPicker()

const moduleTitle = `
    <div class="w-full">
        <em class="text-[3.2rem] font-semibold text${textColor}-500">
            ${selectedName}
        </em>
    </div>
`
const mainRow = document.querySelector('.cardRow')
mainRow.insertAdjacentHTML('beforeend', moduleTitle)

selectedList.forEach((listItem) => {
    const rows = `
            <div
                class="cardRow my-6 h-fit w-full rounded-3xl border border-blue-950 border-opacity-40 shadow-sm transition-shadow duration-300"
            >
                <!-- card header sistema respiratório -->
                <div
                    class="cardHeader relative flex h-cardHeader items-center justify-between border-blue-950 border-opacity-40 px-8 text-[2.2rem] group-hover:bg-slate-100 poppins-regular"
                >
                    ${listItem}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="h-[2rem] transform transition-all duration-200"
                    >
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                        />
                    </svg>
                </div>
                <!-- card body sistema respiratório -->
                <div
                    class="cardBody h-full max-h-0 w-full flex-grow overflow-hidden rounded-bl-3xl rounded-br-3xl transition-all"
                >
                    <div class="flex flex-wrap justify-between transition-all">
                        <!-- card buttons veias -->
                        <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                            <div
                                class="slide justify-center group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:shadow-md "
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text${textColor}-500 poppins-regular"
                                >
                                    Slider
                                </span>
                            </div>
                        </a>
                        <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                            <div
                                class="slide justify-center group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border${textColor}-500 hover:shadow-md "
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text${textColor}-500 poppins-regular"
                                >
                                    Botão
                                </span>
                            </div>
                        </a>
                        <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                            <div
                                class="slide justify-center group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border${textColor}-500 hover:shadow-md "
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text${textColor}-500 poppins-regular"
                                >
                                    Botão
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    `
    mainRow.insertAdjacentHTML('beforeend', rows)
})
