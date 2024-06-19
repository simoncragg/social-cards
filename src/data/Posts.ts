import type { User } from "./User";

export interface Post {
  id: number,
  author: User;
  message: string;
  imagePath?: string;
  timestamp: number;
  likes: number;
}

export interface PersonalisedPost extends Post {
  isLiked: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      id: 22,
      username: "simonc",
    },
    message: "cute rabbit 😍",
    imagePath: "/images/rabbit.jpg",
    timestamp: 1718285836000,
    likes: 3211
  },
  {
    id: 2,
    author: {
      id: 23,
      username: "bradw",
    },
    message: "Some interesting scenes in this!",
    imagePath: "/images/obi-wan.jpeg",
    timestamp: 1718285916000,
    likes: 14102
  },
  {
    id: 3,
    author: {
      id: 24,
      username: "novice@frontend",
    },
    message: "10/10 would recommend pairing with Simon.",
    timestamp: 1718285916000,
    likes: 100
  }
];
