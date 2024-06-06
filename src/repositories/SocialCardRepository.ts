interface Card {
    userId: number;
    username: string;
    title?: string;
    message: string;
  }

const cards: Card[] = [
    {
        username: "Test",
        title: "Test Title",
        message: "Test Message",
        userId: 22,
    },
    {
        username: "Another Test",
        title: "You guessed it, another test title",
        message: "woah something different!",
        userId: 23,
    },
    {
        username: "TheNovice@FrontEnd",
        title: "Despite it not being my usual tech stack, this isn't too bad",
        message: "10/10 would recommend pairing with Simon.",
        userId: 24,
    }
];

function getCards() {
    return cards;
}

function addCards(card: Card) {
    cards.push(card);
}

export { getCards, addCards };