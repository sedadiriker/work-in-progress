document.addEventListener('DOMContentLoaded', () => {
    const allText = document.querySelectorAll('.header-slayt p')
    let index = 0

    //hepsini sakla
    const hideAllText = () => {
        allText.forEach(text => {
            text.style.display = 'none'
        })
    }
    // sırayla göster
    const showNextText = () => {
        hideAllText()
        allText[index].style.display = 'block'
        index = (index + 1) % allText.length
    }

    showNextText()

    setInterval(showNextText, 3000)
})

const allImages = document.querySelectorAll('.small-images img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener('click', () => {
    allImages.forEach(image => {

        let currentPosition = image.style.transform ? parseInt(image.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition - 30
        image.style.transform = `translateX(${newPosition}px)`
    })
    document.querySelectorAll('.slide-section img').forEach(img => {
        let currentPosition = img.style.transform ? parseInt(img.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition - 1200
        img.style.transform = `translateX(${newPosition}px)`
    })

})
next.addEventListener('click', () => {
    allImages.forEach(image => {

        let currentPosition = image.style.transform ? parseInt(image.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition + 30
        image.style.transform = `translateX(${newPosition}px)`
    })
    document.querySelectorAll('.slide-section img').forEach(img => {
        let currentPosition = img.style.transform ? parseInt(img.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition + 1200
        img.style.transform = `translateX(${newPosition}px)`

    })

})

//slide nav
const paragraphs = document.querySelectorAll('.slide_nav p')

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        paragraphs.forEach(p => {
            p.classList.remove('active')
        })
        paragraph.classList.add('active');
    })
})


const allCards = document.querySelectorAll('.row .card')
const ileri = document.querySelector('.ileri')
const geri = document.querySelector('.geri')

geri.addEventListener('click', () => {
    allCards.forEach(card => {

        let currentPosition = card.style.transform ? parseInt(card.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition - 290
        card.style.transform = `translateX(${newPosition}px)`
    })
})
ileri.addEventListener('click', () => {
    allCards.forEach(card => {

        let currentPosition = card.style.transform ? parseInt(card.style.transform.replace('translateX(', '').replace('px)', ''), 10) : 0
        let newPosition = currentPosition + 290
        card.style.transform = `translateX(${newPosition}px)`
    })
})


