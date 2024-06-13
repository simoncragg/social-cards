export interface Card {
	userId: number;
	username: string;
	message: string;
	imagePath?: string;
	timestamp: number;
}

export const cards: Card[] = [
	{
		id: "1",
		userId: 22,
		username: "simonc",
		message: "cute rabbit 😍",
		imagePath: "/images/rabbit.jpg",
		timestamp: 1718285836000
	},
	{
		id: "2",
		username: "bradleyw",
		message: "woah something different!",
		userId: 23,
		timestamp: 1718285916000
	},
	{
		id: "3",
		username: "novice@frontend",
		message: "10/10 would recommend pairing with Simon.",
		userId: 24,
		timestamp: 1718285916000
	}
];
