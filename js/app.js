document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'purple-star',
            img: 'images/purple-star.png'
        },
        {
            name: 'purple-star',
            img: 'images/purple-star.png'
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
            name: 'pink-flower',
            img: 'images/pink-flower.png'
        },
        {
            name: 'pink-flower',
            img: 'images/pink-flower.png'
        },
        {
            name: 'snowman',
            img: 'images/snowman.png'
        },
        {
            name: 'snowman',
            img: 'images/snowman.png'
        },
        {
            name: 'art-leaf',
            img: 'images/line-art-leaf.png'
        },
        {
            name: 'art-leaf',
            img: 'images/line-art-leaf.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'books',
            img: 'images/books.png'
        },
        {
            name: 'books',
            img: 'images/books.png'
        },
        {
            name: 'donut',
            img: 'images/white-and-pink-donut.png'
        },
        {
            name: 'donut',
            img: 'images/white-and-pink-donut.png'
        },
        {
            name: 'vintage-car',
            img: 'images/vintage-car.png'
        },
        {
            name: 'vintage-car',
            img: 'images/vintage-car.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
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
            const coverDiv = document.createElement('div');
            coverDiv.setAttribute('class', 'card-item');
            
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', cardArray[i].img);
            cardImg.setAttribute('alt', cardArray[i].name);

            coverDiv.addEventListener('click', flipCard);
            coverDiv.setAttribute('data-id', i);
            coverDiv.appendChild(cardImg);

            grid.appendChild(coverDiv);
        }
    }

    function checkForCardMatches() {
        const cards = document.querySelectorAll('.card-item');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId === optionTwoId) {
            // cards[optionOneId].setAttribute('style', 'background-color: goldenrod');
            // cards[optionTwoId].setAttribute('style', 'background-color: goldenrod');
            document.getElementById('notify-update').textContent = 'You have clicked the same image!';
        } else if(cardsChosen[0] === cardsChosen[1]) {
            document.getElementById('notify-update').textContent = 'You found a matching card!';
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            // cards[optionOneId].setAttribute('style', 'background-color: goldenrod');
            // cards[optionTwoId].setAttribute('style', 'background-color: goldenrod');
            document.getElementById('notify-update').textContent = 'Sorry, try again';
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    function flipCard() {
        // Get the card ID and name
        var cardId = this.getAttribute('data-id');
        var cardName = cardArray[cardId].name;
        var cardImg = cardArray[cardId].img;
        cardsChosen.push(cardName);
        cardsChosenId.push(cardId);

        // Add the flip animation class
        this.classList.add('flipped');
        this.cardImg.style.display = `block`;

        if (cardsChosen.length === 2) {
            setTimeout(() => {
                checkForCardMatches();

                // Remove the flip animation class for unmatched cards
                this.classList.remove('flipped');
                
            }, 1000);
        }
    }

    createBoard();
})