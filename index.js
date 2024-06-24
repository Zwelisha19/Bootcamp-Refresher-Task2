const cards = document.querySelectorAll('.card');
let flippedCard = [];
const match = [];

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (this.classList.contains('flip') || flippedCard.length === 2) {
        return;
    }
    
    this.classList.add('flip');
    this.innerText = this.dataset.letter;
    flippedCard.push(this);

    if (flippedCard.length === 2) {
        const card1 = flippedCard[0];
        const card2 = flippedCard[1];
        if (card1.dataset.letter === card2.dataset.letter) {
            match.push(card1, card2);
            flippedCard = [];
        } else {
            setTimeout(() => {
                card1.classList.remove('flip');
                card2.classList.remove('flip');
                card1.innerText = '';
                card2.innerText = '';
                flippedCard = [];
            }, 1000);
        }
    }

    
}