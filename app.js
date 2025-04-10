document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'book',
            img: 'images/book.jpg'
        },
        {
            name: 'book',
            img: 'images/book.jpg'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'snowman',
            img: 'images/snowman.jpg'
        },
        {
            name: 'snowman',
            img: 'images/snowman.jpg'
        },
        {
            name: 'mushrooms',
            img: 'images/mushrooms.jpg'
        },
        {
            name: 'mushrooms',
            img: 'images/mushrooms.jpg'
        },
        {
            name: 'rubber-duck',
            img: 'images/rubber-duck.png'
        },
        {
            name: 'rubber-duck',
            img: 'images/rubber-duck.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank-t.jpg');
            card.setAttribute('data-id', i);

            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForCardMatches() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank-t.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank-t.jpg');
            alert('You have clicked the same image!');
        } else if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a matching card!');
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank-t.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank-t.jpg');
            alert('Sorry, try again');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForCardMatches, 500);
        }
    }

    createBoard();
})