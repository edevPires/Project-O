const moduleInserter = (list, name, type) => {
    const textColorPicker = () => {
        if (type === 'Veias') {
            return '-red'
        } else if (type === 'Ossos') {
            return '-gray'
        }
    }

    var textColor = textColorPicker()

    const moduleTitle = `
    <div class="w-full flex flex-wrap items-center justify-center sm:justify-between">
        <em class="text-[3.5rem] font-light text-blue-950">
            ${name}
        </em>
        <div
            class="searchBar my-[2rem] flex justify-center size-fit h-fit w-fit translate-y-0 items-center rounded-full transition-all sm:my-0 sm:w-fit w-full"
        >
            <span
                class="poppins-light mr-[1rem] text-[1.5rem] text-blue-950"
                >Buscar</span
            >
            <input
                type="text"
                id="search"
                class="text flex items-center rounded-full border border-solid border-blue-900 px-[2.5rem] py-[0.5rem] text-[2rem] no-underline outline-none w-[30rem] min-w-[30rem] poppins-regular"
            />
        </div>
    </div>
`
    const mainRow = document.querySelector('.cardRow')
    mainRow.insertAdjacentHTML('beforeend', moduleTitle)

    list.forEach((listItem) => {
        const rows = `<div
                    class="cardRow dataIndex my-6 h-fit w-full rounded-3xl border border-blue-950 border-opacity-40 shadow-sm transition-shadow duration-300"
                    data-index='´${listItem.toLowerCase()}´'
                >
                    <!-- card header sistema respiratório -->
                    <div
                        class="cardHeader relative flex h-cardHeader items-center justify-between border-blue-950 border-opacity-40 px-8 group-hover:bg-slate-100"
                    >
                        <span
                            class="poppins-regular line-clamp-1 text-[1.8rem] text-slate-900 sm:text-[2rem]"
                        >
                            ${listItem}
                        </span>
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
                        <div
                            class="flex flex-wrap justify-between transition-all"
                        >
                            <!-- card buttons veias -->
                            <a class="min-w-full  flex-grow-0 ">
                                <div
                                    class="save group m-8 sm:mb-0 flex h-[10rem] sm:h-[6rem] items-center justify-center rounded-2xl border-[1px] border-gray-400 p-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:cursor-pointer hover:shadow-md"
                                    data-nome="${listItem}"
                                    data-tipo="${type}"
                                >
                                    <span
                                        class="group-hover:text${textColor}-500 poppins-medium flex items-center text-[1.5rem] font-bold text-blue-950 duration-200"
                                    >
                                        Salvar
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        class="mx-3 h-[2.6rem] fill-blue-900"
                                    >
                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                                <div
                                    class="slide group m-8 my-8 flex h-[10rem] items-center justify-center rounded-2xl border-[1px] border-gray-400 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                                    data-nome="${listItem}"
                                    data-tipo="${type}"
                                >
                                    <span
                                        class="group-hover:text${textColor}-500 poppins-medium flex items-center text-[1.5rem] font-bold text-blue-950 duration-200"
                                    >
                                        Vizualização 3D
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        class="mx-3 h-[2.6rem]"
                                    >
                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            fill="rgb(23 37 84 )"
                                            d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                                <div
                                    class="group m-8 my-8 flex h-[10rem] items-center justify-center rounded-2xl border-[1px] border-gray-400 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                                >
                                    <span
                                        class="group-hover:text${textColor}-500 poppins-medium flex items-center text-[1.5rem] font-bold text-blue-950 duration-200"
                                    >
                                        Data Science
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        class="mx-3 h-[2.6rem]"
                                    >
                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            fill="rgb(23 37 84 )"
                                            d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a class="min-w-full sm:min-w-[16rem] sm:flex-grow">
                                <div
                                    class="group m-8 my-8 flex h-[10rem] items-center justify-center rounded-2xl border-[1px] border-gray-400 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:shadow-md"
                                >
                                    <span
                                        class="group-hover:text${textColor}-500 poppins-medium flex items-center text-[1.5rem] font-bold text-blue-950 duration-200"
                                    >
                                        Notas do professor
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        class="mx-3 h-[2.6rem]"
                                    >
                                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                        <path
                                            fill="rgb(23 37 84 )"
                                            d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                                        />
                                    </svg>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
    `
        mainRow.insertAdjacentHTML('beforeend', rows)
    })

    const saveBtn = document.querySelectorAll('.save')

    saveBtn.forEach((saveBtnElement) => {
        const dataAttName = saveBtnElement.getAttribute('data-nome')
        const dataAttType = saveBtnElement.getAttribute('data-tipo')

        const savedBtnTxt = saveBtnElement.querySelector('.save span')
        const savedBtnSVG = saveBtnElement.querySelector('.save svg')

        if (savedCardsVal(dataAttName) === true) {
            savedBtnSVG.classList.add('fill-white')
            savedBtnTxt.parentNode.classList.add('bg-blue-900')
            savedBtnTxt.classList.add('text-white')
            savedBtnTxt.textContent = 'salvo'
        }
        saveBtnElement.addEventListener('click', () => {
            saveCardHandler(dataAttName, dataAttType, savedBtnTxt, savedBtnSVG)
        })
    })
}
