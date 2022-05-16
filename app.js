document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'banana',
        img: 'images/banana.png'
    },
    {
        name: 'citrus',
        img: 'images/citrus.png'
    },
    {
        name: 'citrus',
        img: 'images/citrus.png'
    },
    {
        name: 'grape',
        img: 'images/grape.png'
    },
    {
        name: 'grape',
        img: 'images/grape.png'
    },
    {
        name: 'melon',
        img: 'images/melon.png'
    },
    {
        name: 'melon',
        img: 'images/melon.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    },
    {
        name: 'pineapple',
        img: 'images/pineapple.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/donut.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/donut.png')
        cards[optionTwoId].setAttribute('src', 'images/donut.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cards.Array.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}
//flip card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard();
});

