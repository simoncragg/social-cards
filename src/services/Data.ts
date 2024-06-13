export type CardType = {
	id: number,
	userId: number;
	username: string;
	message: string;
	imagePath?: string;
	timestamp: number;
}

export const cards: CardType[] = [
	{
		id: 1,
		userId: 22,
		username: "simonc",
		message: "cute rabbit 😍",
		imagePath: "/images/rabbit.jpg",
		timestamp: 1718285836000
	},
	{
		id: 2,
		userId: 23,
		username: "bradw",
		message: "Some interesting scenes in this!",
		imagePath: "/images/obi-wan.jpeg",
		timestamp: 1718285916000
	},
	{
		id: 3,
		userId: 24,
		username: "novice@frontend",
		message: "10/10 would recommend pairing with Simon.",
		timestamp: 1718285916000
	}
];
