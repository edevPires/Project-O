const selectedListString = localStorage.getItem('selectedList')
const selectedList = JSON.parse(selectedListString)

const mainRow = document.querySelector('.cardRow')

selectedList.forEach((listItem) => {
    const html = `<div
                class="cardRow my-6 h-fit w-full rounded-3xl border border-gray-200 shadow-sm"
            >
                <!-- card input veias -->
                <input
                    type="checkbox"
                    class="group peer absolute left-0 z-20 h-cardHeader w-full opacity-0 transition-all hover:cursor-pointer"
                />
                <!-- card header veias -->
                <div
                    class="cardHeader relative flex h-cardHeader items-center justify-between border-gray-200 px-8 text-[2rem] font-medium transition-all group-hover:bg-slate-100 peer-checked:border-0"
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
                <!-- card body veias -->
                <div
                    class="max-h-0 w-full flex-grow overflow-hidden transition-all peer-checked:max-h-fit"
                >
                    <div class="flex flex-wrap justify-between transition-all">
                        <!-- card buttons veias -->
                        <a class="min-w-full md:min-w-[16rem] md:flex-grow">
                            <div
                                class="slide group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border-0 hover:bg-blue-700 hover:shadow-lg"
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text-white"
                                >
                                    Slider
                                </span>
                            </div>
                        </a>
                        <a class="min-w-full md:min-w-[16rem] md:flex-grow">
                            <div
                                class="group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border-0 hover:bg-blue-700 hover:shadow-lg"
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text-white"
                                >
                                    Botão
                                </span>
                            </div>
                        </a>
                        <a class="min-w-full md:min-w-[16rem] md:flex-grow">
                            <div
                                class="group m-8 my-8 flex h-[10rem] items-center rounded-2xl border-[1px] border-gray-300 p-4 shadow-sm transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border-0 hover:bg-blue-700 hover:shadow-lg"
                            >
                                <span
                                    class="flex items-center text-[1.5rem] font-bold duration-200 group-hover:text-white"
                                >
                                    Botão
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    `
    mainRow.insertAdjacentHTML('beforeend', html)
})
