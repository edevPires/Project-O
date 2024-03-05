// Global var
const headerHeight = '10rem'
const cardHeaderHeight = '6rem'

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            height: {
                header: headerHeight,
                cardHeader: cardHeaderHeight,
            },
            spacing: {
                headerSize: headerHeight, // Adjust the size as needed
            },
        },
    },
    plugins: [],
}
