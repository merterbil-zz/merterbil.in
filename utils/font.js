import Observer from 'fontfaceobserver'

const Font = () => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    const montserrat = new Observer('Montserrat')

    montserrat.load().then(() => {
        document.documentElement.classList.add('montserrat')
    })
}

export default Font