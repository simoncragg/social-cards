import { cards } from "./Data.ts";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function getCardsAsync() {
	await sleep(1000);
	return cards;
}

async function addCardAsync(card: Card) {
	cards.push(card);
}

export { getCardsAsync, addCardAsync };


